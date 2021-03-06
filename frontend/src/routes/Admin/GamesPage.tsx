import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { AdminLayout } from '../../components/AdminLayout'
import { MakeGameOfTheDay } from '../../components/pages/Admin/GamesPage'
import { Table } from '../../components/Table'
import { GET_GAMES_ADMIN, MAKE_GAME_OF_DAY } from '../../queries'

export const GamesPage = () => {
  const history = useHistory()
  const { loading, data } = useQuery(GET_GAMES_ADMIN)
  const [makeGameOfTheDay] = useMutation(MAKE_GAME_OF_DAY)

  const handleMakeGameOfTheDay = async (id: string) => {
    await makeGameOfTheDay({
      variables: { id },
      refetchQueries: ['gameOfTheDay', { query: GET_GAMES_ADMIN }],
      awaitRefetchQueries: true
    })
  }

  if (loading) return <h1>Loading...</h1>
  return (
    <AdminLayout>
      <Table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Price</th>
            <th>Device</th>
            <th>Platform</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.games.map(({ id, name, price, platform, device }: any) => (
            <tr key={id}>
              <td
                style={{ cursor: 'pointer' }}
                onClick={() => history.push(`/game/${id}`)}
              >
                {name}
              </td>
              <td>{price} USD</td>
              <td>{device}</td>
              <td>{platform}</td>
              <td>
                {!data.gameOfTheDay || data.gameOfTheDay.id !== id ? (
                  <MakeGameOfTheDay
                    onClick={() => handleMakeGameOfTheDay(id)}
                  />
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  )
}
