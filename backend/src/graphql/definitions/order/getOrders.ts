import { queryField } from '@nexus/schema'

export const getOrders = queryField('getOrders', {
  type: 'Order',
  list: true,
  async resolve(_, __, { prisma, session }) {
    try {
      const orders = await prisma.orders.findMany({
        where: { madeBy: session.userId },
        take: 10,
        select: {
          id: true,
          games: { select: { name: true } },
          keys: { select: { key: true } },
          amount: true
        }
      })

      const mapped = orders.map<{
        id: number
        game: string
        key: string
        amount: number
      }>(({ id, games, keys, amount }) => ({
        id,
        game: games.name,
        key: keys.key,
        amount
      }))

      return mapped
    } catch (e) {
      return []
    }
  }
})
