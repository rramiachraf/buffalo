import 'dotenv/config'
import * as env from 'env-var'

export const PORT = env.get('PORT').required().asPortNumber()
export const SESSION_SECRET = env.get('SESSION_SECRET').required().asString()
export const CORS = env.get('CORS').required().asString()

export const STRIPE_SECRET = env.get('STRIPE_SECRET').required().asString()
export const STRIPE_WEBHOOK_SECRET = env
  .get('STRIPE_WEBHOOK_SECRET')
  .required()
  .asString()

export const AWS_ACCESS = env.get('AWS_ACCESS').required().asString()
export const AWS_SECRET = env.get('AWS_SECRET').required().asString()
export const POSTERS_BUCKET = env.get('POSTERS_BUCKET').required().asString()
