import React from 'react'
import { styled } from 'linaria/react'
import { colors } from '../styles/colors'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 0 15%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`

const Navigation = styled.ul`
  height: 5rem;
  background: ${colors.main};
  border-radius: 3px;
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    color: white;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 1.5rem 2rem;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.3s background;
    &:hover {
      background: ${darken(0.1, colors.main)};
    }
  }
`

export const AdminLayout: React.FC<{ children: React.ReactElement }> = ({
  children
}) => (
  <Container>
    <Navigation>
      <Link to="/admin/users">
        <li>Users</li>
      </Link>
      <Link to="/admin/games">
        <li>Games</li>
      </Link>
      <Link to="/admin/addGame">
        <li>Add new game</li>
      </Link>
    </Navigation>
    {children}
  </Container>
)
