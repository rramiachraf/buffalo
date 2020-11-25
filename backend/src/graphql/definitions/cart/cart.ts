import { queryField } from '@nexus/schema'

export const cart = queryField('cart', {
  type: 'Cart',
  list: true,
  nullable: false,
  resolve(_, __, { session }) {
    if (session.cart) {
      return session.cart
    } else {
      return []
    }
  }
})
