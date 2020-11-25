import React from 'react'
import {
  FaSteamSymbol,
  FaBattleNet,
  FaLaptop,
  FaXbox,
  FaPlaystation
} from 'react-icons/fa'
import { SiOrigin, SiUbisoft } from 'react-icons/si'
import { styled } from 'linaria/react'

import { colors } from '../styles/colors'

const Container = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid ${colors.lighterGray};
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    font-size: 2.5rem;
    color: ${colors.lighterBlack};
  }
  span {
    color: ${colors.main};
    font-size: 1.5rem;
    font-weight: 500;
  }
`

interface InfosProps {
  platform?: 'steam' | 'origin' | 'blizzard' | 'uplay'
  device: 'pc' | 'xbox' | 'playstation'
  price: number
}

export const Infos = ({ device, platform, price }: InfosProps) => (
  <Container>
    <span>{price} USD</span>
    {device === 'pc' && <FaLaptop />}
    {device === 'playstation' && <FaPlaystation />}
    {device === 'xbox' && <FaXbox />}
    {platform === 'uplay' && <SiUbisoft />}
    {platform === 'origin' && <SiOrigin />}
    {platform === 'blizzard' && <FaBattleNet />}
    {platform === 'steam' && <FaSteamSymbol />}
  </Container>
)
