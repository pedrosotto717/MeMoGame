import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../components/Header'
import { GiPlayButton } from 'react-icons/gi'
import GameContext from '../context/GameContext'

export const NewGame = () => {
  const { updateBoard } = useContext(GameContext)
  return (
    <>
      <Header />
      <section className="new-game-container">
        <button
          onClick={() => updateBoard({ type: 'icons', size: 20, time: 15 })}>
          Set Board in Icons
        </button>
        <NavLink to="/game">
          Start <GiPlayButton className="icon" />
        </NavLink>
      </section>
    </>
  )
}
