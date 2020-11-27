import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useAuth } from '../lib/useAuth'

export const AdminRoute = (props: RouteProps) => {
  const { user } = useAuth()

  if (user.role === 'admin') return <Route {...props} />

  return <></>
}
