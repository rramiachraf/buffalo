import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`

export const GET_CART = gql`
  {
    cart {
      id
      name
      price
      poster
    }
    total
  }
`

export const GET_GAME = gql`
  query getGame($id: ID!) {
    game(id: $id) {
      id
      name
      description
      poster
      price
      platform
      device
    }
  }
`

export const ADD_TO_CART = gql`
  mutation addToCartMutation($id: ID!) {
    addToCart(gameId: $id)
  }
`

export const GET_CLIENT_SECRET = gql`
  mutation {
    checkout
  }
`

export const GET_TOTAL = gql`
  {
    total
  }
`

export const SEARCH_GAME = gql`
  query searchGameQuery($query: String!) {
    searchGame(query: $query) {
      id
      name
      poster
      price
    }
  }
`

export const LOGGED_USER = gql`
  {
    me {
      id
      firstName
      lastName
      role
    }
  }
`

export const LOGOUT = gql`
  mutation {
    logout
  }
`

export const REMOVE_FROM_CART = gql`
  mutation removeFromCartMutation($id: ID!) {
    removeFromCart(gameId: $id)
  }
`

export const GET_ORDERS = gql`
  {
    getOrders {
      id
      key
      game
      amount
    }
  }
`

export const GET_GAMES = gql`
  {
    games {
      id
      poster
    }
  }
`

export const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      email
      role
      createdAt
    }
  }
`

export const GET_GAME_OF_THE_DAY = gql`
  {
    gameOfTheDay {
      id
      name
      price
      largePoster
    }
  }
`

export const GET_GAMES_ADMIN = gql`
  {
    games {
      id
      name
      price
      platform
      device
    }
    gameOfTheDay {
      id
    }
  }
`

export const MAKE_GAME_OF_DAY = gql`
  mutation makeGameOfTheDayMutation($id: ID!) {
    makeGameOfTheDay(gameID: $id)
  }
`

export const ADD_GAME = gql`
  mutation addGameMutation(
    $name: String!
    $description: String!
    $price: Float!
    $device: Device!
    $platform: Platform
  ) {
    addGame(
      name: $name
      description: $description
      price: $price
      device: $device
      platform: $platform
    ) {
      id
    }
  }
`
