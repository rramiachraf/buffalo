import { useApolloClient } from '@apollo/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LOGGED_USER } from '../queries'

type Logged = undefined | true | false
type LoggedState = [Logged, Dispatch<SetStateAction<Logged>>]

export const useAuth = () => {
  const [logged, setLogged] = useState(undefined) as LoggedState
  const [user, setUser] = useState({}) as any
  const client = useApolloClient()

  useEffect(() => {
    client
      .query({ query: LOGGED_USER })
      .then(({ error, data }) => {
        if (error) {
        }

        if (!data.me) {
          setLogged(false)
        }

        if (data.me) {
          setLogged(true)
          setUser(data.me)
        }
      })
      .catch(e => console.log(e))
  }, [client, setLogged, setUser])

  return {
    logged,
    user
  }
}
