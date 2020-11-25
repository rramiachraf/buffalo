import { styled } from 'linaria/react'
import { colors } from '../../styles/colors'

export const Container = styled.form`
  width: 50rem;
  height: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  grid-template-rows: auto auto 4rem;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 3px 2px ${colors.lighterGray};
  padding: 2rem;
  border-radius: 3px;
  border: 1px solid ${colors.lighterGray};
  h1 {
    color: ${colors.lighterBlack};
    text-align: center;
    font-weight: 500;
    align-self: center;
  }
  button {
    height: 4rem;
  }
  div {
    border: 2px solid ${colors.lighterGray};
    padding: 1rem 2rem;
    border-radius: 3px;
  }
  span {
    color: ${colors.red};
    text-align: center;
    font-size: 1.4rem;
  }
`
