import { styled } from 'linaria/react'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 20rem;
    color: ${colors.main};
  }
  h1 {
    color: ${colors.lighterBlack};
    font-size: 2rem;
  }
`
