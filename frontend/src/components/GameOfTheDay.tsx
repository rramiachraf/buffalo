import React from 'react'
import { styled } from 'linaria/react'
import { rgba } from 'polished'
import { colors } from '../styles/colors'

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

export const GameOfTheDay = () => (
  <Container img="https://i.imgur.com/tL7d0Um.jpg">
    <div></div>
    <InfosArea>
      <Title>
        PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG) (PC) - Steam Key - GLOBAL
      </Title>
      <Price>35.82 USD</Price>
    </InfosArea>
  </Container>
)
