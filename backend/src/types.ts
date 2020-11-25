import { PrismaClient, PrismaClientOptions } from '@prisma/client'
import Stripe from 'stripe'

export interface Context {
  prisma: PrismaClient<PrismaClientOptions>
  session: Session
  stripe: Stripe
}

export interface Cart {
  name: string
  id: string
  price: number
  poster: string | null
}

interface Session {
  userId: number
  cart: Cart[]
  id: string
  role: 'customer' | 'moderator' | 'admin'
  destroy: () => void
}
