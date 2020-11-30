import { rule, shield, or, not } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.session.userId !== undefined
  }
)

const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.session.role === 'admin'
  }
)

const isModerator = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.session.role === 'moderator'
  }
)

export const permissions = shield({
  Query: {
    me: isAuthenticated,
    user: isAuthenticated,
    getOrders: isAuthenticated,
    users: isAdmin
  },
  Mutation: {
    logout: isAuthenticated,
    checkout: isAuthenticated,
    addGame: or(isAdmin, isModerator),
    createUser: not(isAuthenticated),
    login: not(isAuthenticated),
    updateRole: isAdmin,
    makeGameOfTheDay: or(isAdmin, isModerator)
  }
})
