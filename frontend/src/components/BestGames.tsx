import React from 'react'
import { styled } from 'linaria/react'
import { colors } from '../styles/colors'
import { useQuery } from '@apollo/client'
import { GET_GAMES } from '../queries'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  h1 {
    color: ${colors.lighterBlack};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  }
`

const Games = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`

interface GamePreviewProps {
  img: string
}

const GamePreview = styled.div`
  border-radius: 3px;
  height: 30rem;
  background: ${({ img }: GamePreviewProps) =>
    img ? `url('${img}')` : colors.lighterGray};
  box-shadow: 0 1px 1px ${colors.lighterBlack};
  cursor: pointer;
  background-size: cover;
`

export const BestGames = () => {
  const { data, loading } = useQuery(GET_GAMES)
  if (loading) return <h1>Loading...</h1>
  return (
    <Container>
      <h1>Recommended for you</h1>
      <Games>
        {data.games.map((game: any) => (
          <Link to={`/game/${game.id}`}>
            <GamePreview img={game.poster} />
          </Link>
        ))}
      </Games>
    </Container>
  )
}
