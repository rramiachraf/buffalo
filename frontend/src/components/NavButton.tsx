import React from 'react'
import { styled } from 'linaria/react'
import { darken } from 'polished'

import { colors } from '../styles/colors'

const StyledNavButton = styled.button`
  border-radius: 3px;
  color: white;
  background: ${colors.main};
  border: none;
  font-size: 1.5rem;
  font-family: inherit;
  cursor: pointer;
  padding: 0 2rem;
  height: 4rem;
  transition: 0.3s background ease;
  position: relative;
  &:hover,
  &:active {
    background: ${darken(0.1, colors.main)};
  }
`

const CartItems = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
  bottom: 0;
  right: 0;
  border-radius: 3px 0 0 0;
  font-size: 1.2rem;
`

export const NavButton: React.FC<{
  onClick?: () => void
  children: React.ReactElement
  items?: number
}> = ({ onClick, children, items }) => {
  return (
    <StyledNavButton onClick={onClick}>
      {children}
      {items! > 0 && <CartItems>{items}</CartItems>}
    </StyledNavButton>
  )
}
