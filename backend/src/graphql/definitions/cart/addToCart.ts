import { idArg, mutationField } from '@nexus/schema'

export const addToCart = mutationField('addToCart', {
  type: 'Boolean',
  args: { gameId: idArg({ required: true }) },
  async resolve(_, { gameId }, { session, prisma }) {
    try {
      const game = await prisma.games.findOne({ where: { id: gameId } })
      if (game === null) {
        throw new Error()
      }
      const newGame = {
        name: game.name,
        id: gameId,
        price: game.price,
        poster: game.poster
      }
      if (session.cart) {
        session.cart = [...session.cart, newGame]
      } else {
        session.cart = [newGame]
      }
      return true
    } catch (e) {
      return false
    }
  }
})
