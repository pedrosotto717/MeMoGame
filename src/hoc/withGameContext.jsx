import React from 'react'
import GameContext from '../context/GameContext'

export function withGameContext(WrappedComponent) {
  return (props) => (
    <GameContext.Consumer>
      {({ context, updateBoard }) => (
        <WrappedComponent
          {...props}
          context={context}
          updateBoard={updateBoard}
        />
      )}
    </GameContext.Consumer>
  )
}
