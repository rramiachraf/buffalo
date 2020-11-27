import React from 'react'

import { BestGames } from '../components/BestGames'
import { GameOfTheDay } from '../components/GameOfTheDay'
import { Container } from '../components/pages/Home'

export const HomePage = () => {
  return (
    <Container>
      <GameOfTheDay />
      <BestGames />
    </Container>
  )
}
