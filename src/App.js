import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewGame } from './pages/NewGame'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import GameContext from './context/GameContext'

//styles
import './styles/buttons.css'

/**
 * toggleTheme
 * Lazyload and Suspense
 */

const App = () => {
  return (
    <GameContext.Provider value={{ type: 'icons', size: 12 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/game" element={<Game type="icons" size={14} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GameContext.Provider>
  )
}

export default App
