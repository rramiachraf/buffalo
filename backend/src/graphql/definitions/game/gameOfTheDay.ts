import { queryField } from '@nexus/schema'

export const gameOfTheDay = queryField('gameOfTheDay', {
  type: 'GameOfTheDay',
  async resolve(_, __, { prisma }) {
    try {
      const game = await prisma.gameOfTheDay.findFirst({
        include: {
          games: {
            select: { id: true, name: true, price: true, largePoster: true }
          }
        },
        orderBy: { id: 'desc' }
      })

      if (!game) {
        throw new Error('Not found')
      }

      return { ...game.games }
    } catch (e) {
      return null
    }
  }
})
