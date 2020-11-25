import { arg, intArg, mutationField } from '@nexus/schema'

export const updateRole = mutationField('updateRole', {
  type: 'Boolean',
  args: {
    userID: intArg({ required: true }),
    newRole: arg({ type: 'Role', required: true })
  },
  async resolve(_, { userID, newRole }, { prisma }) {
    try {
      await prisma.users.update({
        where: { id: userID },
        data: { role: newRole }
      })
      return true
    } catch (e) {
      return false
    }
  }
})
