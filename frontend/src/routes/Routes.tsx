import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { styled } from 'linaria/react'

import { Navbar } from '../components/Navbar'

import { HomePage } from './HomePage'
import { GamePage } from './GamePage'
import { CartPage } from './CartPage'
import { CheckoutPage } from './CheckoutPage'
import { PrivateRoute } from './PrivateRoute'
import { OrdersPage } from './OrdersPage'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 7rem 1fr;
  gap: 4rem;
`

export default () => (
  <BrowserRouter>
    <Container>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/game/:id" component={GamePage} />
        <Route path="/cart" component={CartPage} />
        <PrivateRoute path="/checkout" component={CheckoutPage} />
        <PrivateRoute path="/orders" component={OrdersPage} />
      </Switch>
    </Container>
  </BrowserRouter>
)
