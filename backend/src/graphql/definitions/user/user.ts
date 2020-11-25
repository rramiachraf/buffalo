import { intArg, queryField } from '@nexus/schema'

export const user = queryField('user', {
  type: 'User',
  args: { id: intArg({ required: true }) },
  async resolve(_, { id }, { prisma }) {
    try {
      const user = await prisma.users.findOne({ where: { id } })
      if (user === null) {
        throw new Error('User not found')
      }
      return user
    } catch (e) {
      return null
    }
  }
})
