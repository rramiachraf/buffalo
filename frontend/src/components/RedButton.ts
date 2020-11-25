import { styled } from 'linaria/react'
import { darken } from 'polished'

import { Button } from './Button'
import { colors } from '../styles/colors'

export const RedButton = styled(Button)`
  background: ${colors.red};
  &:hover,
  &:active {
    background: ${darken(0.1, colors.red)};
  }
`
