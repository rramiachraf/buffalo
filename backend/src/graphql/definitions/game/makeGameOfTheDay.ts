import { idArg, mutationField } from '@nexus/schema'

export const makeGameOfTheDay = mutationField('makeGameOfTheDay', {
  type: 'Boolean',
  args: { gameID: idArg({ required: true }) },
  async resolve(_, { gameID }, { prisma }) {
    try {
      await prisma.gameOfTheDay.create({
        data: { games: { connect: { id: gameID } } }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
