import React from 'react'
import { NavLink } from 'react-router-dom'
import { GameCard } from '../components/GameCard'
import { useRandomBoard } from '../hooks/useRandomBoard'

export const Game = ({ type, size }) => {
  // fichaselected1 y 2

  const [board] = useRandomBoard({ type, size })
  console.log('GAME')

  const renderCards = (card, i) => {
    const contentCard =
      type === 'icons' ? <card.value className="react-icons" /> : card.value

    return (
      <li key={i ** 2} className="game-board--item">
        <GameCard index={card.index}>{contentCard}</GameCard>
      </li>
    )
  }

  return (
    <div className="game-container">
      <section className="game-board">
        <ul className="game-board--list">{board.map(renderCards)}</ul>
      </section>
      <NavLink to="/">To Home</NavLink>
    </div>
  )
}
