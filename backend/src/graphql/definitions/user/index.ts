import { objectType, enumType } from '@nexus/schema'

export const Role = enumType({
  name: 'Role',
  members: ['customer', 'moderator', 'admin']
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('firstName', { nullable: false })
    t.string('lastName', { nullable: false })
    t.string('email', { nullable: false })
    t.field('role', { type: 'Role', nullable: false })
    t.date('createdAt', { nullable: false })
  }
})

export { createUser } from './createUser'
export { login } from './login'
export { logout } from './logout'
export { me } from './me'
export { user } from './user'
export { users } from './users'
export { updateRole } from './updateRole'
