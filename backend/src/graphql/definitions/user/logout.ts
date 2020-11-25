import { mutationField } from '@nexus/schema'

export const logout = mutationField('logout', {
  type: 'Boolean',
  resolve(_, __, { session }) {
    try {
      if (!session.userId) {
        throw new Error()
      }
      session.destroy()
      return true
    } catch (e) {
      return false
    }
  }
})
