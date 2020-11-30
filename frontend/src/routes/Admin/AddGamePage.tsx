import { useMutation } from '@apollo/client'
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

import { AdminLayout } from '../../components/AdminLayout'
import { Button } from '../../components/Button'
import {
  Form,
  Input,
  customSelectStyles,
  selectTheme,
  Textarea
} from '../../components/pages/Admin/AddGamePage'
import { ADD_GAME, GET_GAMES_ADMIN } from '../../queries'

const platformOptions = [
  { value: 'blizzard', label: 'Blizzard' },
  { value: 'origin', label: 'Origin' },
  { value: 'steam', label: 'Steam' },
  { value: 'uplay', label: 'Uplay' }
]

const deviceOptions = [
  { value: 'pc', label: 'PC' },
  { value: 'playstation', label: 'PlayStation' },
  { value: 'xbox', label: 'Xbox' }
]

const initialValues = {
  name: '',
  description: '',
  price: ''
}

export const AddGamePage = () => {
  const [device, setDevice] = useState('')
  const [platform, setPlatform] = useState('')

  const history = useHistory()

  const [addGame] = useMutation(ADD_GAME)

  const handleDeviceChange = (e: any) => {
    setDevice(e.value)
  }

  const handlePlatformChange = (e: any) => {
    setPlatform(e.value)
  }

  return (
    <AdminLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            const { data: addGameData } = await addGame({
              variables: {
                ...data,
                price: Number(data.price),
                platform,
                device
              },
              awaitRefetchQueries: true,
              refetchQueries: ['games', { query: GET_GAMES_ADMIN }]
            })

            setSubmitting(false)

            if (!addGameData.addGame) {
              throw new Error('Cannot create game')
            }

            history.push(`/game/${addGameData.addGame.id}`)
          } catch (e) {}
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Input name="name" placeholder="Name" />
              <Input name="price" placeholder="Price" />
              <Select
                options={deviceOptions}
                placeholder="Select device..."
                styles={customSelectStyles}
                theme={selectTheme}
                onChange={handleDeviceChange}
              />
              {device === 'pc' && (
                <Select
                  options={platformOptions}
                  placeholder="Select platform..."
                  isClearable={true}
                  styles={customSelectStyles}
                  theme={selectTheme}
                  onChange={handlePlatformChange}
                />
              )}
              <Field
                name="description"
                placeholder="Description"
                as={Textarea}
              />
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </Form>
          )
        }}
      </Formik>
    </AdminLayout>
  )
}
