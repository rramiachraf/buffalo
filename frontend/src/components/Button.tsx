import { styled } from 'linaria/react'
import { darken } from 'polished'

import { colors } from '../styles/colors'

export const Button = styled.button`
  border-radius: 3px;
  background: ${colors.main};
  color: white;
  font-family: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  font-weight: 500;
  transition: 0.3s background ease;
  &:hover,
  &:active {
    background: ${darken(0.1, colors.main)};
  }
  &:disabled {
    opacity: 0.75;
  }
`
