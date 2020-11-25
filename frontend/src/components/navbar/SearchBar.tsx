import React, { useState } from 'react'
import { styled } from 'linaria/react'
import { darken } from 'polished'
import { FaSearch } from 'react-icons/fa'
import { useApolloClient } from '@apollo/client'

import { colors } from '../../styles/colors'
import { SEARCH_GAME } from '../../queries'
import { ListItem } from '../ListItem'

const Container = styled.div`
  height: 4rem;
  display: grid;
  grid-template-columns: 1fr 6rem;
  position: relative;
`

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  border-radius: 3px 0 0 3px;
  padding: 0 2rem;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 400;
  border: 1px solid ${colors.lighterGray};
  border-right: none;
  color: ${colors.lighterBlack};
`

const Button = styled.button`
  border: none;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  background: ${colors.main};
  transition: 0.3s background ease;
  &:hover,
  &:active {
    background: ${darken(0.1, colors.main)};
  }
`

const SearchIcon = styled(FaSearch)`
  font-size: 1.5rem;
  color: white;
`

const List = styled.ul`
  position: absolute;
  background-color: white;
  width: 100%;
  top: 4.2rem;
  left: 0;
  border: 1px solid ${colors.lighterGray};
  box-sizing: border-box;
  padding: 1rem 2rem;
  border-radius: 3px;
  box-shadow: 0 3px 2px ${colors.lighterGray};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const [openList, setOpenList] = useState(false)
  const [loading, setLoading] = useState(false)

  const client = useApolloClient()

  const handleSearchGame = async () => {
    setOpenList(true)
    setLoading(true)

    const { data } = await client.query({
      query: SEARCH_GAME,
      variables: { query: search }
    })

    setLoading(false)
    setItems(data.searchGame)
  }
  return (
    <Container>
      <Input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        placeholder="Search for games"
      />
      <Button onClick={handleSearchGame}>
        <SearchIcon />
      </Button>
      {openList && (
        <List>
          {loading && <span>Loading..</span>}
          {!loading && items.map(({ name, poster, price, id }) => (
            <ListItem
              key={id}
              name={name}
              price={price}
              poster={poster}
              id={id}
              onClick={() => {
                setOpenList(false)
                setItems([])
                setSearch('')
              }}
            />
          ))}
        </List>
      )}
    </Container>
  )
}
