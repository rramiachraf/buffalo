import { mutationField, stringArg } from '@nexus/schema'
import { hash } from 'bcrypt'

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    firstName: stringArg({ required: true }),
    lastName: stringArg({ required: true }),
    email: stringArg({ required: true }),
    password: stringArg({ required: true })
  },
  async resolve(_, { email, firstName, lastName, password }, { prisma }) {
    try {
      const hashedPassword = await hash(password, 12)
      const user = await prisma.users.create({
        data: { email, firstName, lastName, password: hashedPassword },
        select: { id: true, email: true, firstName: true, lastName: true }
      })
      return user
    } catch (e) {
      return null
    }
  }
})
