import { Router } from 'express'
import { S3 } from 'aws-sdk'
import { ManagedUpload, PutObjectRequest } from 'aws-sdk/clients/s3'
import multer from 'multer'
import sharp from 'sharp'

import { AWS_ACCESS, AWS_SECRET, POSTERS_BUCKET } from '../settings/env'
import { prisma } from '../app'

const route = Router()

const s3 = new S3({
  credentials: { accessKeyId: AWS_ACCESS, secretAccessKey: AWS_SECRET }
})

const uploadToAWS = (objectRequest: PutObjectRequest) => {
  return new Promise<ManagedUpload.SendData>((resolve, reject) => {
    s3.upload(objectRequest, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const upload = multer({})

export const updatePoster = route.post(
  '/update_poster/:gameId',
  upload.fields([
    { name: 'poster', maxCount: 1 },
    { name: 'largePoster', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const game = await prisma.games.findOne({
        where: { id: req.params.gameId },
        select: {
          id: true
        }
      })

      if (!game) {
        throw new Error('')
      }

      const posterFile = (req.files as any)['poster'][0].buffer
      const largePosterFile = (req.files as any)['largePoster'][0].buffer

      const poster = await sharp(posterFile)
        .resize({ width: 260, height: 350 })
        .jpeg()
        .toBuffer()

      const { Location: posterLocation } = await uploadToAWS({
        Key: game.id,
        Bucket: POSTERS_BUCKET,
        Body: poster,
        ContentType: 'image/jpeg',
        CacheControl: 'max-age=31536000'
      })

      if (largePosterFile) {
        const largePoster = await sharp(largePosterFile)
          .resize(950)
          .jpeg()
          .toBuffer()

        const { Location: largePosterLocation } = await uploadToAWS({
          Key: game.id + '-large',
          Bucket: POSTERS_BUCKET,
          Body: largePoster,
          ContentType: 'image/jpeg',
          CacheControl: 'max-age=31536000'
        })

        await prisma.games.update({
          where: { id: req.params.gameId },
          data: { poster: posterLocation, largePoster: largePosterLocation }
        })
      } else {
        await prisma.games.update({
          where: { id: req.params.gameId },
          data: { poster: posterLocation }
        })
      }

      res.send()
    } catch (e) {
      res.status(400).send()
    }
  }
)
