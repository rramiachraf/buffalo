import { idArg, queryField } from '@nexus/schema'

export const game = queryField('game', {
  type: 'Game',
  args: { id: idArg({ required: true }) },
  async resolve(_, { id }, { prisma }) {
    try {
      const game = await prisma.games.findOne({ where: { id } })
      if (!game) {
        throw new Error()
      }
      return game
    } catch (e) {
      throw new Error('Game not found')
    }
  }
})
