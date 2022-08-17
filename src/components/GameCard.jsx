import React, { useEffect, useState } from 'react'

export const GameCard = ({
  children,
  index,
  state,
  handleGameClick,
  matchCards,
  clearCards,
}) => {
  const [animate, setAnimate] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    console.log('validaciones')
    if (
      state.card.flipped &&
      state.secondCard.flipped &&
      animate &&
      state.card.value === state.secondCard.value
    ) {
      setTimeout(() => {
        console.log('CARDS IGUALES')
        setDisableButton(true)
        matchCards(index)
      })
    } else if (
      state.card.flipped &&
      state.secondCard.flipped &&
      animate &&
      state.card.value !== state.secondCard.value
    ) {
      setTimeout(() => {
        console.log('NO MATCHING')
        setDisableButton(false)
        if (!state.cardsFlipped.includes(index)) setAnimate(false)
        clearCards()
      }, 1000)
    }
  }, [state])

  const handleClick = () => {
    if (disableButton) return null

    if (!state.card.flipped && !animate) {
      return () => {
        handleGameClick(index)
        setAnimate(!animate)
      }
    } else if (state.card.flipped && !state.secondCard.flipped && !animate) {
      return () => {
        handleGameClick(index)
        setAnimate(!animate)
      }
    } else {
      return () => {}
    }
  }

  const styles = animate ? { background: 'yellow' } : {}

  return (
    <button style={styles} className="game-card" onClick={handleClick()}>
      {children}
    </button>
  )
}
