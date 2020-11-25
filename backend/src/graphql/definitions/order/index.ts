import { objectType } from '@nexus/schema'

export const Order = objectType({
  name: 'Order',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('game', { nullable: false })
    t.string('key', { nullable: false })
    t.float('amount', { nullable: false })
  }
})

export { getOrders } from './getOrders'
