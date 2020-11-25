import { idArg, mutationField } from '@nexus/schema'

export const removeFromCart = mutationField('removeFromCart', {
  type: 'Boolean',
  args: { gameId: idArg({ required: true }) },
  resolve(_, { gameId }, { session }) {
    try {
      if (!session.cart || session.cart.length === 0) {
        throw new Error('No cart session')
      }

      session.cart = session.cart.filter(({ id }) => id !== gameId)
      return true
    } catch (e) {
      return false
    }
  }
})
