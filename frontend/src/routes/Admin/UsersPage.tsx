import React from 'react'
import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'

import { AdminLayout } from '../../components/AdminLayout'
import { Table } from '../../components/Table'
import { GET_USERS } from '../../queries'

export const UsersPage = () => {
  const { data, loading } = useQuery(GET_USERS)
  if (loading) return <h1>Loading...</h1>
  console.log(data)
  return (
    <AdminLayout>
      <Table>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Registered</th>
        </tr>
        {data.users.map(
          ({ id, firstName, lastName, email, role, createdAt }: any) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{`${firstName} ${lastName}`}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>{dayjs(createdAt).format('DD MMM, YYYY')}</td>
            </tr>
          )
        )}
      </Table>
    </AdminLayout>
  )
}
