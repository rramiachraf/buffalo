import { queryField } from '@nexus/schema'

export const me = queryField('me', {
  type: 'User',
  async resolve(_, __, { prisma, session }) {
    try {
      if (!session.userId) {
        throw new Error()
      }

      const user = await prisma.users.findOne({ where: { id: session.userId } })

      if (!user) {
        throw new Error()
      }

      return user
    } catch (e) {
      return null
    }
  }
})
