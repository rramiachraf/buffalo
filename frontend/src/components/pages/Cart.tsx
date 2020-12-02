import { styled } from 'linaria/react'
import { lighten } from 'polished'

import { colors } from '../../styles/colors'

export const Container = styled.div`
  padding: 0 15%;
  display: grid;
  grid-template-columns: 1fr 25rem;
  gap: 2rem;
`

export const Title = styled.h1`
  color: ${colors.lighterBlack};
  font-size: 2rem;
  font-weight: 700;
  span {
    color: ${colors.lightBlack};
    font-size: 1.2rem;
    font-weight: 500;
  }
`

export const CartItems = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  li {
    background: ${lighten(0.1, colors.lighterGray)};
    border: 1px solid ${colors.lighterGray};
    border-radius: 3px;
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 5rem 1fr auto;
    gap: 2rem;
    h2 {
      color: ${colors.lightBlack};
      font-size: 1.8rem;
    }
    div {
      font-size: 1.5rem;
      color: ${colors.lighterBlack};
      display: flex;
      gap: 1rem;
      sup {
        font-size: 1rem;
        font-weight: 700;
      }
    }
    img {
      width: 100%;
      border-radius: 3px;
    }
    svg {
      font-size: 1.8rem;
      cursor: pointer;
      color: ${colors.red};
    }
  }
`

export const Total = styled.div`
  display: grid;
  grid-template-rows: 4rem 4rem;
  gap: 1rem;
  span {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    color: ${colors.lighterBlack};
    sup {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`

export const EmptyCart = styled.div`
  display: grid;
  align-self: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: ${colors.lighterBlack};
  }
`
