import React, {
  MutableRefObject,
  useRef,
  ChangeEvent,
  useState,
  SetStateAction
} from 'react'
import Modal from 'react-modal'
import { styled } from 'linaria/react'
import { useParams } from 'react-router-dom'

import { colors } from '../styles/colors'
import { Button, GreenButton } from './Button'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  button {
    height: 4rem;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.lightBlack};
  text-transform: uppercase;
  text-align: center;
`

type InputRef = MutableRefObject<HTMLInputElement>
type fileState = [File, React.Dispatch<SetStateAction<{}>>]

export const UpdatePosterModal = () => {
  const { id } = useParams() as { id: string }
  const posterRef = useRef() as InputRef
  const largePosterRef = useRef() as InputRef

  const [poster, setPoster] = useState({}) as fileState
  const [largePoster, setLargePoster] = useState({}) as fileState
  const [submitting, setSubmitting] = useState(false)

  const accept = '.jpeg, .jpg, .png'

  const handlePosterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPoster(e.target.files![0])
  }

  const handleLargePosterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLargePoster(e.target.files![0])
  }

  const handleSubmission = async () => {
    setSubmitting(true)
    const body = new FormData()
    body.append('poster', poster)
    body.append('largePoster', largePoster)

    const url = process.env.REACT_APP_API_URL! + '/update_posters/' + id

    const request = new Request(url, {
      method: 'POST',
      credentials: 'include',
      body
    })

    try {
      await fetch(request)
      document.location.reload()
      setSubmitting(false)
    } catch (e) {
      setSubmitting(false)
    }
  }

  const modalContentStyles: React.CSSProperties = {
    top: '20rem',
    bottom: '20rem',
    right: '40rem',
    left: '40rem'
  }

  return (
    <Modal isOpen={true} style={{ content: modalContentStyles }}>
      <Container>
        <Title>Upload game posters</Title>
        <div>
          <input
            onChange={handlePosterChange}
            ref={posterRef}
            type="file"
            accept={accept}
            hidden
          />
          <GreenButton onClick={() => posterRef.current.click()}>
            {poster.name ? poster.name : 'Choose poster'}
          </GreenButton>

          <input
            ref={largePosterRef}
            type="file"
            accept={accept}
            onChange={handleLargePosterChange}
            hidden
          />
          <GreenButton onClick={() => largePosterRef.current.click()}>
            {largePoster.name ? largePoster.name : 'Choose large poster'}
          </GreenButton>
        </div>
        <Button disabled={submitting} type="submit" onClick={handleSubmission}>
          {submitting ? 'Uploading...' : 'Upload'}
        </Button>
      </Container>
    </Modal>
  )
}
