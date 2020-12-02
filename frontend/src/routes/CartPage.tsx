import React from 'react'
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { FaTimes } from 'react-icons/fa'

import { Button } from '../components/Button'
import {
  Container,
  Title,
  CartItems,
  Total,
  EmptyCart
} from '../components/pages/Cart'

import { GET_CART, REMOVE_FROM_CART } from '../queries'
import { useAuth } from '../lib/useAuth'

export const CartPage = () => {
  const { push } = useHistory()
  const { logged } = useAuth()

  const { data, loading } = useQuery(GET_CART)

  if (loading) return <h1>Loading...</h1>

  const { cart, total } = data

  if (cart.length === 0) {
    return (
      <EmptyCart>
        <h1>Your cart is empty :/</h1>
      </EmptyCart>
    )
  }

  return (
    <Container>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Title>
          Your cart <span>({cart.length} items)</span>
        </Title>
        <CartItems>
          {cart && cart.map((item: any) => <Item key={item.id} {...item} />)}
        </CartItems>
      </div>
      <Total>
        <span>
          Total: {total}
          <sup>USD</sup>
        </span>
        <Button
          disabled={logged ? false : true}
          onClick={() => push('/checkout')}
        >
          {logged ? 'Continue to payment' : 'Please login to checkout'}
        </Button>
      </Total>
    </Container>
  )
}

const Item = ({ poster, name, price, id }: any) => {
  const [removeFromCart] = useMutation(REMOVE_FROM_CART)

  const handleCartRemoval = async (id: string) => {
    try {
      await removeFromCart({
        awaitRefetchQueries: true,
        variables: { id },
        refetchQueries: [{ query: GET_CART }]
      })
    } catch (e) {}
  }

  return (
    <li>
      <img src={poster} alt="game poster" />
      <h2>{name}</h2>
      <div>
        <span>
          {price}
          <sup>USD</sup>
        </span>
        <FaTimes onClick={() => handleCartRemoval(id)} />
      </div>
    </li>
  )
}
