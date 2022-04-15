import React, { useState } from 'react'

export const GameCard = ({ children, index }) => {
  const [cardValue, setCardValue] = useState(index)

  return (
    <button className="game-card" onClick={() => console.log(cardValue)}>
      {children}
    </button>
  )
}
