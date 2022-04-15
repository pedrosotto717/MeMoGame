import React from 'react'

const GameContext = React.createContext({})

const initialGlobalState = {
  themeLight: true,
  game: {
    board: {
      type: 'numbers',
      size: 12,
    },
    timeElapsed: 0,
  },
}

// const Provider = ({children}) => {
//   return (

//   )
// }

export default GameContext
