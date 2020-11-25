import React from 'react'
import { styled } from 'linaria/react'
import { Link } from 'react-router-dom'

import { colors } from '../styles/colors'

interface ListItemProps {
  id?: string
  name: string
  price: number
  poster: string
  onClick: (event: any) => void
}

const Item = styled.li`
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 3px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    font-size: 1.4rem;
    color: ${colors.lightBlack};
    font-weight: 700;
  }
  small {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.lighterBlack};
    font-family: inherit;
  }
  sup {
    font-size: 1.1rem;
    font-weight: 400;
  }
`

export const ListItem = ({
  id,
  name,
  poster,
  price,
  onClick
}: ListItemProps) => (
  <Link to={`/game/${id}`}>
    <Item onClick={onClick}>
      <img src={poster} alt="game poster" />
      <div>
        <h3>{name}</h3>
        <small>
          {price} <sup>USD</sup>
        </small>
      </div>
    </Item>
  </Link>
)
