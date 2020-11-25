import { styled } from 'linaria/react'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  padding: 0 15%;
  height: 100%;
  display: grid;
`

export const Game = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 4rem;
  h1 {
    color: ${colors.lightBlack};
    font-size: 2.6rem;
  }
  p {
    font-size: 1.4rem;
    color: ${colors.lighterBlack};
    line-height: 2rem;
  }
`

interface PosterProps {
  img: string | null
}

export const Poster = styled.div`
  background: ${({ img }: PosterProps) =>
    img === null ? colors.lighterGray : `url(${img})`};
  background-size: cover;
  border-radius: 5px;
`

export const Left = styled.div`
  display: grid;
  grid-template-rows: 35rem 4rem;
  gap: 1rem;
`

export const Right = styled.div`
  display: grid;
  grid-template-rows: auto 5rem 1fr;
  gap: 1.5rem;
`
