import React from 'react'
import { styled } from 'linaria/react'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 50rem;
  gap: 1rem;
`

interface BigProps {
  img: string
}

const Big = styled.div`
  background: ${({ img }: BigProps) => `url(${img})`};
  background-size: cover;
  border-radius: 3px;
  cursor: pointer;
`

const Smalls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
interface SmallsProps {
  img: string
}

const SmallPreview = styled.div`
  background: ${({ img }: SmallsProps) => `url(${img})`};
  background-size: cover;
  border-radius: 3px;
  cursor: pointer;
`

export const HotStuff = () => (
  <Container>
    <Big img="https://i.imgur.com/tL7d0Um.jpg" />
    <Smalls>
      <SmallPreview img="https://i.imgur.com/gSsBIvo.jpg" />
      <SmallPreview img="https://i.imgur.com/16jkmBW.jpg" />
      <SmallPreview img="https://i.imgur.com/spbs9e0.jpg" />
      <SmallPreview img="https://i.imgur.com/cMUYXBy.jpg" />
    </Smalls>
  </Container>
)
