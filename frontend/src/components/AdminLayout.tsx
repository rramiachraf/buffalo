import React from 'react'
import { styled } from 'linaria/react'
import { colors } from '../styles/colors'
import { darken } from 'polished'
import { NavLink } from 'react-router-dom'

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
  border-bottom: 5px solid ${darken(0.1, colors.main)};
  li {
    color: white;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
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
      <Link to="/admin/users" display="Users" />
      <Link to="/admin/games" display="Games" />
      <Link to="/admin/addGame" display="Add new game" />
    </Navigation>
    {children}
  </Container>
)

interface NavigationLinkProps {
  to: string
  display: string
}

const Link = ({ to, display }: NavigationLinkProps) => {
  const activeStyles: React.CSSProperties = {
    background: darken(0.15, colors.main),
    borderRadius: '3px',
    fontWeight: 500
  }
  return (
    <NavLink to={to} activeStyle={activeStyles}>
      <li>{display}</li>
    </NavLink>
  )
}
