import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { PrismaClient } from '@prisma/client'
import session from 'express-session'
import Stripe from 'stripe'
import pgSession from 'connect-pg-simple'
import { applyMiddleware } from 'graphql-middleware'

import { schema } from './graphql/schema'
import { CORS, SESSION_SECRET, STRIPE_SECRET } from './settings/env'
import { updatePoster } from './rest/updatePoster'
import { stripeWebhook } from './rest/stripeWebhook'
import { pool } from './settings/db'
import { permissions } from './graphql/rules'

const PGSession = pgSession(session)

export const prisma = new PrismaClient()

export const stripe = new Stripe(STRIPE_SECRET, {
  apiVersion: '2020-08-27',
  typescript: true
})

export const app = express()

app.use(
  express.json({
    type: '*/*',
    verify(req, res, buf) {
      //@ts-ignore
      req.rawBody = buf
    }
  })
)

app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    name: 'buffalo_sid',
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PGSession({ pool })
  })
)

app.use(updatePoster)
app.use(stripeWebhook)

const schemaWithMiddleware = applyMiddleware(schema, permissions)

export const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => ({ prisma, stripe, session: req.session })
})

server.applyMiddleware({
  app,
  path: '/api',
  cors: {
    origin: CORS,
    credentials: true
  }
})
