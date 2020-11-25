import React from 'react'
import { styled } from 'linaria/react'
import { darken } from 'polished'

import { colors } from '../styles/colors'

export const NavButton: React.FC<{
  onClick?: () => void
  children: React.ReactElement
}> = ({ onClick, children }) => {
  const StyledLoginButton = styled.button`
    border-radius: 3px;
    color: white;
    background: ${colors.main};
    border: none;
    font-size: 1.4rem;
    font-family: inherit;
    cursor: pointer;
    padding: 0 2rem;
    height: 4rem;
    transition: 0.3s background ease;
    &:hover,
    &:active {
      background: ${darken(0.1, colors.main)};
    }
  `
  return <StyledLoginButton onClick={onClick}>{children}</StyledLoginButton>
}
