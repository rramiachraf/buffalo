import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CART } from '../queries'

export const CartContext = React.createContext([])

export const CartProvider: React.FC<{ children: React.ReactElement }> = ({
  children
}) => {
  const { data } = useQuery(GET_CART)

  return (
    <CartContext.Provider value={data ? data.cart : []}>
      {children}
    </CartContext.Provider>
  )
}
