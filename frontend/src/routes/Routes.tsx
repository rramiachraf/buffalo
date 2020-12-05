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
import { AdminRoute } from './AdminRoute'
import { UsersPage } from './Admin/UsersPage'
import { GamesPage } from './Admin/GamesPage'
import { AddGamePage } from './Admin/AddGamePage'
import { Footer } from '../components/Footer'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 7rem 1fr 5rem;
  gap: 3rem;
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

        <AdminRoute path="/admin/users" component={UsersPage} />
        <AdminRoute path="/admin/games" component={GamesPage} />
        <AdminRoute path="/admin/addGame" component={AddGamePage} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
)
