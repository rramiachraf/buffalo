import { queryField } from '@nexus/schema'

export const users = queryField('users', {
  type: 'User',
  list: true,
  async resolve(_, __, { prisma }) {
    try {
      const users = await prisma.users.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' }
      })

      return users
    } catch (e) {
      return []
    }
  }
})
