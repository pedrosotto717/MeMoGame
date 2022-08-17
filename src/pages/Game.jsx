import React, { useEffect, useReducer, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GameCard } from '../components/GameCard'
import { Timer } from '../components/Timer'
import { withGameContext } from '../hoc/withGameContext'
import { useRandomBoard } from '../hooks/useRandomBoard'
import { useTimer } from '../hooks/useTimer'
import { cardGameReducer } from '../reducers/cardGameReducer'

const initialState = {
  cardsFlipped: [],
  card: {
    flipped: false,
    value: null,
  },
  secondCard: {
    flipped: false,
    value: null,
  },
}

const PlayBoard = ({ context }) => {
  const [state, dispatch] = useReducer(cardGameReducer, initialState)
  const [board] = useRandomBoard(context.boardSettings)
  const { counter, playTimer, stopTimer, restartTimer } = useTimer(
    context.boardSettings.time
  )

  useEffect(() => {
    if (state.cardsFlipped.length === context.boardSettings.size / 2) {
      console.log('You Win')
      stopTimer()
    } else if (counter <= 0) {
      console.log('Game Over')
      stopTimer()
      //  launchMenuGameOver()
    }
  }, [context.boardSettings.size, counter, state, stopTimer])

  /**
   * ACTIONS_TYPES
   */
  const handleGameClick = (cardValue) => {
    if (counter === context.boardSettings.time) playTimer()

    console.log('AQUI', counter)
    dispatch({ type: 'FLIPPED_CARD', payload: { value: cardValue } })
  }

  const matchCards = (cardValue) => {
    dispatch({ type: 'MATCH_CARDS', payload: { value: cardValue } })
  }

  const clearCards = () => {
    dispatch({ type: 'CLEAR_CARDS' })
  }

  const renderCards = (card, i) => {
    const contentCard =
      context.boardSettings.type === 'icons' ? (
        <card.value className="react-icons" />
      ) : (
        card.value
      )

    return (
      <li key={i ** 2} className="game-board--item">
        <GameCard
          index={card.index}
          state={state}
          handleGameClick={handleGameClick}
          matchCards={matchCards}
          clearCards={clearCards}>
          {contentCard}
        </GameCard>
      </li>
    )
  }

  return (
    <div className="game-container">
      <section className="game-board container">
        <ul className="game-board--list">{board.map(renderCards)}</ul>
        <Timer counter={counter} />
      </section>
      <NavLink to="/">To Home</NavLink>
      <h1>Win Game</h1>
      <h1>Game Over</h1>
    </div>
  )
}

export const Game = withGameContext(PlayBoard)
