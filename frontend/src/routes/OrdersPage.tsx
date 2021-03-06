import { useQuery } from '@apollo/client'
import React from 'react'

import { GET_ORDERS } from '../queries'
import { Container, NoOrders } from '../components/pages/Orders'
import { Table } from '../components/Table'
import { KeyCell } from '../components/KeyCell'

export const OrdersPage = () => {
  const { data, loading } = useQuery(GET_ORDERS)

  if (loading) return <h1>Loading...</h1>

  return (
    <Container>
      {data.getOrders.length === 0 && (
        <NoOrders>
          Once you make your first purchase it will appear here.
        </NoOrders>
      )}
      {data.getOrders.length > 0 && (
        <Table>
          <tr>
            <th>Order</th>
            <th>Game</th>
            <th>Key</th>
            <th>Amount</th>
          </tr>
          {data.getOrders.map(({ id, game, key, amount }: any) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{game}</td>
              <KeyCell serialKey={key} />
              <td>{amount}</td>
            </tr>
          ))}
        </Table>
      )}
    </Container>
  )
}
