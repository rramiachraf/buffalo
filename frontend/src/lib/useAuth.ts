import { useApolloClient } from '@apollo/client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LOGGED_USER } from '../queries'

type Logged = undefined | true | false
type LoggedState = [Logged, Dispatch<SetStateAction<Logged>>]

export const useAuth = () => {
  const [logged, setLogged] = useState(undefined) as LoggedState
  const [user, setUser] = useState({})
  const client = useApolloClient()

  useEffect(() => {
    client
      .query({ query: LOGGED_USER })
      .then(({ error, data }) => {
        if (error) {
          throw new Error(error.message)
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
  }, [client, setLogged])

  return {
    logged,
    user
  }
}
