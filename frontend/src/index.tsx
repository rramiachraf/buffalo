import 'dotenv/config'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './styles/main.css'
import Routes from './routes/Routes'
import { CartProvider } from './lib/CartContext'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  credentials: 'include'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
