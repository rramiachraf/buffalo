import { queryField, stringArg } from '@nexus/schema'

export const searchGame = queryField('searchGame', {
  type: 'Game',
  list: true,
  nullable: true,
  args: { query: stringArg({ required: true }) },
  async resolve(_, { query }, { prisma }) {
    try {
      const games = await prisma.games.findMany({
        take: 4,
        where: { name: { contains: query, mode: 'insensitive' } }
      })

      if (!games) {
        throw new Error('Not found')
      }

      return games
    } catch (e) {
      return null
    }
  }
})
