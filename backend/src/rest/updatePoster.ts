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
  upload.single('poster'),
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

      const file = await sharp(req.file.buffer)
        .resize({ width: 260, height: 350 })
        .toFormat('jpeg')
        .toBuffer()

      const { Location } = await uploadToAWS({
        Key: game.id,
        Bucket: POSTERS_BUCKET,
        Body: file,
        ContentType: 'image/jpeg',
        CacheControl: 'max-age=31536000'
      })

      await prisma.games.update({
        where: { id: req.params.gameId },
        data: { poster: Location }
      })

      res.send()
    } catch (e) {
      res.status(500).send()
    }
  }
)
