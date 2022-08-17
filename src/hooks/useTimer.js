import React, { useEffect, useState } from 'react'

export const useTimer = (initialTime) => {
  const [counter, setCounter] = useState(initialTime)
  const [timer, setTimer] = useState(null)
  let counterTimer = initialTime

  const playTimer = () => {
    if (counter >= 0) {
      setTimer(
        setInterval(() => {
          counterTimer = counterTimer - 1
          setCounter(counterTimer)
        }, 1000)
      )
    }
  }

  const stopTimer = () => {
    clearInterval(timer)
  }

  const restartTimer = () => {
    setCounter(initialTime)
  }

  return {
    counter,
    playTimer,
    stopTimer,
    restartTimer,
  }
}
