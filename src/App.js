import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewGame } from './pages/NewGame'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Game } from './pages/Game'

import { useInitialGlobalState } from './hooks/useInitialGlobalState'
import GameContext from './context/GameContext'

//styles
import './styles/buttons.css'

const App = () => {
  const initialState = useInitialGlobalState()

  return (
    <GameContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GameContext.Provider>
  )
}

export default App
