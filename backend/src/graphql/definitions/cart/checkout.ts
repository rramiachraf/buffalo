import { mutationField } from '@nexus/schema'

export const checkout = mutationField('checkout', {
  type: 'String',
  async resolve(_, __, { session, stripe, prisma }) {
    try {
      if (!session.cart) {
        throw new Error('Your cart is empty')
      }
      const total = session.cart
        .map(({ price }) => price)
        .reduce((acc, curr) => acc + curr)

      const makeDescription = () => {
        const paidGames = session.cart.map(({ name }) => name).join(', ')
        return paidGames
      }

      const user = await prisma.users.findOne({ where: { id: session.userId } })

      if (!user) {
        throw new Error()
      }

      const amount = Number(total.toFixed(2)) * 100
      const intent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
        description: makeDescription(),
        receipt_email: user.email,
        metadata: {
          sessionID: session.id,
          userID: session.userId,
          games: JSON.stringify(
            session.cart.map(({ id, price }) => ({ id, price }))
          )
        }
      })

      return intent.client_secret
    } catch (e) {
      return null
    }
  }
})
