import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useAuth } from '../lib/useAuth'

export const PrivateRoute = (props: RouteProps) => {
  const { logged } = useAuth()

  if (logged) return <Route {...props} />

  return <></>
}
