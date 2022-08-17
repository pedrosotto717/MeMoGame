import React, { useReducer } from 'react'
import { ACTION_TYPES, gameReducer } from '../reducers/gameReducer'

const initialGlobalState = {
  themeLight: true,
  gameData: {
    gameTimeElapsed: 0,
    movesToken: 0,
  },
  boardSettings: {
    type: 'numbers',
    size: 12,
    time: 30,
  },
}

export const useInitialGlobalState = () => {
  const [context, dispatch] = useReducer(gameReducer, initialGlobalState)

  return {
    context,
    toggleTheme: () => dispatch({ type: ACTION_TYPES.toggleTheme }),
    updateBoard: (payload) =>
      dispatch({ type: ACTION_TYPES.updateBoard, payload }),
  }
}
