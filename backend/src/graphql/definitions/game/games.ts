import { queryField } from '@nexus/schema'

export const games = queryField('games', {
  type: 'Game',
  list: true,
  async resolve(_, __, { prisma }) {
    try {
      const games = await prisma.games.findMany({ take: 10 })
      return games
    } catch (e) {
      return []
    }
  }
})
