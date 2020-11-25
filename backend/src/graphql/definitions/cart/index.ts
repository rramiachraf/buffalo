import { objectType } from '@nexus/schema'

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.id('id')
    t.string('name')
    t.float('price')
    t.string('poster')
  }
})

export { addToCart } from './addToCart'
export { cart } from './cart'
export { checkout } from './checkout'
export { removeFromCart } from './removeFromCart'
export { total } from './total'
