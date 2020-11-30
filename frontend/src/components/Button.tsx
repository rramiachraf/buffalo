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

export const RedButton = styled(Button)`
  background: ${colors.red};
  &:hover,
  &:active {
    background: ${darken(0.1, colors.red)};
  }
`

export const GreenButton = styled(Button)`
  background: ${colors.green};
  &:hover,
  &:active {
    background: ${darken(0.1, colors.green)};
  }
`
