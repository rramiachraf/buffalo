import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('firstName')
    t.string('lastName')
    t.string('email')
  }
})

export { createUser } from './createUser'
export { login } from './login'
export { logout } from './logout'
export { me } from './me'
export { user } from './user'
