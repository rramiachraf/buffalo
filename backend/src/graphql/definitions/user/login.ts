import { mutationField, stringArg } from '@nexus/schema'
import { AuthenticationError } from 'apollo-server-express'
import { compare } from 'bcrypt'

export const login = mutationField('login', {
  type: 'User',
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true })
  },
  async resolve(_, { email, password }, { prisma, session }) {
    try {
      const user = await prisma.users.findOne({ where: { email } })
      if (!user) {
        throw new Error()
      }

      const isMatch = await compare(password, user.password)
      if (!isMatch) {
        throw new Error()
      }

      session.userId = user.id
      session.role = user.role
      return user
    } catch (e) {
      throw new AuthenticationError('Invalid credentials')
    }
  }
})
