import React, { useContext } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { Button, GreenButton, RedButton } from '../components/Button'
import { Infos } from '../components/Infos'
import { Container, Game, Left, Right, Poster } from '../components/pages/Game'

import { ADD_TO_CART, GET_CART, GET_GAME, REMOVE_FROM_CART } from '../queries'
import { CartContext } from '../lib/CartContext'
import { NotFound } from './NotFound'
import { useAuth } from '../lib/useAuth'
import { UpdatePosterModal } from '../components/UpdatePostersModal'

export const GamePage = () => {
  const { user } = useAuth()

  const { id } = useParams() as { id: string }

  const cart = useContext(CartContext)

  const { data, loading, error } = useQuery(GET_GAME, {
    variables: { id }
  })

  const [addToCart] = useMutation(ADD_TO_CART)
  const [removeFromCart] = useMutation(REMOVE_FROM_CART)

  if (error) return <NotFound />
  if (loading) return <h1>Loading...</h1>

  const handleAddToCart = async () => {
    await addToCart({
      variables: { id },
      refetchQueries: [{ query: GET_CART }],
      awaitRefetchQueries: true
    })
  }

  const handleRemoveFromCart = async () => {
    await removeFromCart({
      variables: { id },
      refetchQueries: [{ query: GET_CART }],
      awaitRefetchQueries: true
    })
  }

  const { name, poster, device, platform, description, price } = data.game

  return (
    <Container>
      <Helmet>
        <title>{name} | Buffalo</title>
      </Helmet>
      <Game>
        <Left>
          <Poster img={poster} />
          {cart.find((item: any) => item.id === id) ? (
            <RedButton onClick={handleRemoveFromCart}>
              Remove from cart
            </RedButton>
          ) : (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
          {user.role === 'admin' && poster === 'null' && (
            <>
              <GreenButton>Update Posters</GreenButton>
              <UpdatePosterModal />
            </>
          )}
        </Left>

        <Right>
          <h1>{name}</h1>
          <Infos device={device} platform={platform} price={price} />
          <p>{description}</p>
        </Right>
      </Game>
    </Container>
  )
}
