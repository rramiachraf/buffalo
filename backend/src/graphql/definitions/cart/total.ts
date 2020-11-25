import { queryField } from '@nexus/schema'

export const total = queryField('total', {
  type: 'Float',
  resolve(_, __, { session }) {
    try {
      if (!session.cart) {
        throw new Error()
      }

      const total = session.cart
        .map(({ price }) => price)
        .reduce((acc, curr) => acc + curr)

      return total
    } catch (e) {
      return null
    }
  }
})
