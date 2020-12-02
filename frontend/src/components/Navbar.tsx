import React, { useContext, useState } from 'react'
import { styled } from 'linaria/react'
import {
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaShieldAlt
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { colors } from '../styles/colors'
import { LoginModal } from './LoginModal'
import { LOGOUT } from '../queries'
import { NavButton } from './NavButton'
import { useAuth } from '../lib/useAuth'
import { SearchBar } from './navbar/SearchBar'
import { CartContext } from '../lib/CartContext'

const Container = styled.nav`
  background: white;
  padding: 0 15%;
  display: grid;
  grid-template-columns: 1fr 45rem 1fr;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  box-shadow: 0 1px 2px ${colors.lighterGray};
  img {
    justify-self: flex-start;
    width: 4rem;
    cursor: pointer;
  }
`

const OptionsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

export const Navbar = () => {
  const cart = useContext(CartContext)

  const [isOpen, setModal] = useState(false)

  const { logged, user } = useAuth()

  const [logout] = useMutation(LOGOUT)

  const handleLogout = () => {
    logout()
      .then(() => document.location.reload())
      .catch(e => console.log(e))
  }

  return (
    <Container>
      <Link to="/">
        <img src="/logo.jpg" alt="logo" />
      </Link>
      <SearchBar />
      <OptionsArea>
        {user.role === 'admin' && (
          <Link to="/admin/games">
            <NavButton>
              <FaShieldAlt />
            </NavButton>
          </Link>
        )}
        {logged ? (
          <NavButton onClick={handleLogout}>
            <FaSignOutAlt />
          </NavButton>
        ) : (
          <NavButton onClick={() => setModal(true)}>
            <FaUser />
          </NavButton>
        )}
        <Link to="/cart">
          <NavButton items={cart.length}>
            <FaShoppingCart />
          </NavButton>
        </Link>
      </OptionsArea>
      <LoginModal isOpen={isOpen} setModal={setModal} />
    </Container>
  )
}
