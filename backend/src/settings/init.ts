import { prisma } from '../app'
import { hash } from 'bcrypt'

const { email, password, firstName, lastName } = {
  email: 'admin@example.com',
  password: '123456',
  firstName: 'Achraf',
  lastName: 'RRAMI'
}

;(async () => {
  try {
    const hashed = await hash(password, 12)
    await prisma.users.create({
      data: { email, password: hashed, firstName, lastName, role: 'admin' }
    })
    console.log('Account has been created successfully')
  } catch (e) {
    console.log('Something went wrong and we cannot create an account')
  }
})()
