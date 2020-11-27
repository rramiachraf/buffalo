import { Router } from 'express'

import { stripe, prisma } from '../app'
import { pool } from '../settings/db'
import { STRIPE_WEBHOOK_SECRET } from '../settings/env'
import { generateKey } from '../lib/generateKey'

const route = Router()

export const stripeWebhook = route.post('/webhook/stripe', async (req, res) => {
  req.on('data', async bodyBuffer => {
    try {
      const stripeSignature = req.header('stripe-signature')!

      const event = stripe.webhooks.constructEvent(
        bodyBuffer,
        stripeSignature,
        STRIPE_WEBHOOK_SECRET
      )

      if (event.type !== 'charge.succeeded') {
        throw new Error('Invalid type')
      }

      const eventObject = event.data.object as any

      const { payment_intent: paymentIntent } = eventObject

      const { userID, games, sessionID } = eventObject.metadata

      const paidGames = JSON.parse(games) as { id: string; price: number }[]

      paidGames.forEach(async ({ id, price }) => {
        await prisma.orders.create({
          data: {
            users: { connect: { id: Number(userID) } },
            games: { connect: { id } },
            paymentIntent,
            amount: price,
            keys: { create: { games: { connect: { id } }, key: generateKey() } }
          }
        })
      })

      const {
        rows
      } = await pool.query('SELECT sess FROM session WHERE sid = $1', [
        sessionID
      ])

      const newSession = { ...rows[0].sess, cart: [] }

      await pool.query('UPDATE session SET sess = $2 WHERE sid = $1', [
        sessionID,
        newSession
      ])

      res.send()
    } catch (e) {
      res.status(402).send()
    }
  })
})
