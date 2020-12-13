import React from 'react'
import { styled } from 'linaria/react'
import { rgba } from 'polished'
import { colors } from '../styles/colors'
import { useQuery } from '@apollo/client'
import { GET_GAME_OF_THE_DAY } from '../queries'
import { useHistory } from 'react-router-dom'

interface ContainerProps {
  img: string
}

const Container = styled.div`
  gap: 1rem;
  background: ${({ img }: ContainerProps) => `url(${img})`};
  background-size: cover;
  border-radius: 3px;
  cursor: pointer;
  display: grid;
  grid-template-rows: 1fr 6rem;
  transition: 0.3s filter ease;
  &:hover {
    filter: grayscale(0.4);
  }
`

const InfosArea = styled.div`
  padding: 2rem 4rem;
  border-radius: 0 0 3px 3px;
  background: ${rgba('black', 0.6)};
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`

const Price = styled.span`
  color: white;
  font-size: 1.4rem;
  background: ${colors.main};
  border-radius: 3px;
  padding: 0.2rem 1rem;
  font-weight: 500;
`

export const GameOfTheDay = () => {
  const { data, loading, error } = useQuery(GET_GAME_OF_THE_DAY)
  const history = useHistory()

  if (loading) return <h1>Loading...</h1>

  if (data.gameOfTheDay === null || error) return <></>

  return (
    <Container
      img={data.gameOfTheDay.largePoster}
      onClick={() => history.push(`/game/${data.gameOfTheDay.id}`)}
    >
      <div></div>
      <InfosArea>
        <Title>{data.gameOfTheDay.name}</Title>
        <Price>{data.gameOfTheDay.price} USD</Price>
      </InfosArea>
    </Container>
  )
}
