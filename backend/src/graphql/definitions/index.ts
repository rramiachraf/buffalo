import { asNexusMethod } from '@nexus/schema'
import { GraphQLDate } from 'graphql-iso-date'

export const GQLDate = asNexusMethod(GraphQLDate, 'date')

export * as user from './user'
export * as cart from './cart'
export * as game from './game'
export * as order from './order'
