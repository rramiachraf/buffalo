import React, { FormEvent, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  useStripe,
  CardElement,
  Elements,
  useElements
} from '@stripe/react-stripe-js'
import { useMutation, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { Container } from '../components/pages/Checkout'

import { GET_TOTAL, GET_CLIENT_SECRET } from '../queries'
import { Button } from '../components/Button'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const { push } = useHistory()

  const [errorMessage, setErrorMessage] = useState('')

  const { data, loading } = useQuery(GET_TOTAL)
  const [getClientSecret] = useMutation(GET_CLIENT_SECRET)

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (stripe === null) {
      throw new Error('BUG: stripe is null')
    }
    if (elements === null) {
      throw new Error('BUG: stripe elements is null')
    }

    try {
      const { data } = await getClientSecret()
      const { error } = await stripe.confirmCardPayment(data.checkout, {
        payment_method: {
          card: elements.getElement('card')!
        }
      })

      if (error) {
        throw new Error('Client secret not found')
      }

      push('/orders')
    } catch (e) {
      setErrorMessage('Something went wrong, please try again')
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <h1>Total is {data.total} USD</h1>
      {errorMessage && <span>{errorMessage}</span>}
      <CardElement />
      <Button type="submit">Complete Purchase</Button>
    </Container>
  )
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY!)

export const CheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
)
