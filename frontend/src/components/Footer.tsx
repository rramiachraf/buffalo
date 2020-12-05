import React from 'react'
import { styled } from 'linaria/react'

import { colors } from '../styles/colors'
import { lighten } from 'polished'

const Container = styled.div`
  background: white;
  padding: 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: ${colors.lighterBlack};
  border-top: 1px solid ${colors.lighterGray};
  border-bottom: 4px solid ${lighten(0.1, colors.main)};
`

export const Footer = () => (
  <Container>&copy; 2020 Buffalo inc. All Rights Reserved</Container>
)
