import React, { Dispatch, SetStateAction } from 'react'
import Modal from 'react-modal'
import { styled } from 'linaria/react'
import { Field, Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { colors } from '../styles/colors'
import { Button } from './Button'
import { LOGIN } from '../queries'

const Container = styled(Form)`
  display: grid;
  grid-template-rows: auto 4rem 4rem 4.5rem auto 4.5rem;
  gap: 1rem;
  align-content: center;
`

const Input = styled(Field)`
  border-radius: 3px;
  background: none;
  border: 1px solid ${colors.lighterGray};
  font-size: 1.4rem;
  color: ${colors.lighterBlack};
  font-family: inherit;
  padding: 0 2rem;
  transition: 0.1s border ease;
  &:focus {
    border: 1px solid ${colors.main};
  }
`

const Title = styled.h1`
  text-align: center;
  color: ${colors.lighterBlack};
  font-size: 3rem;
`

const SignUpButton = styled(Button)`
  background: none;
  border: 2px solid ${colors.main};
  color: ${colors.main};
  &:hover,
  &:active {
    background: ${colors.main};
    color: white;
  }
`

const Notice = styled.span`
  text-align: center;
  font-size: 1.3rem;
  color: ${colors.lighterBlack};
  font-weight: 500;
`

interface LoginModalProps {
  isOpen: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}

export const LoginModal = ({ isOpen, setModal }: LoginModalProps) => {
  const [login] = useMutation(LOGIN)
  const history = useHistory()
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        },
        content: {
          top: '15rem',
          left: '45rem',
          right: '45rem',
          bottom: '15rem',
          borderRadius: '5px',
          border: `1px solid ${colors.lighterGray}`
        }
      }}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async ({ email, password }, options) => {
          try {
            options.setSubmitting(true)
            await login({ variables: { email, password } })
            options.setSubmitting(false)
            document.location.reload()
          } catch (e) {}
        }}
      >
        {({ isSubmitting }) => (
          <Container>
            <Title>Authentication</Title>
            <Input type="text" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting}>
              Sign In
            </Button>
            <Notice>Don’t have an account?</Notice>
            <SignUpButton
              type="button"
              onClick={() => {
                setModal(false)
                history.push('/signup')
              }}
            >
              Sign Up
            </SignUpButton>
          </Container>
        )}
      </Formik>
    </Modal>
  )
}
