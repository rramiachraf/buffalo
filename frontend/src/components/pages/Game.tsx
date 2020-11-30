import { styled } from 'linaria/react'
import { FaFileImage } from 'react-icons/fa'

import { colors } from '../../styles/colors'
import { Button } from '../Button'

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
  height: 35rem;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    height: 4rem;
  }
`

export const Right = styled.div`
  display: grid;
  grid-template-rows: auto 5rem 1fr;
  gap: 1.5rem;
`

export const UpdatePostersIcon = styled(FaFileImage)`
  color: ${colors.main};
  font-size: 3rem;
`
