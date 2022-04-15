import React, { useEffect, useState } from 'react'
import { transformNumbersToIcons } from '../utils/transformNumbersToIcons'
import { generateRandomNumbersList } from '../utils/generateRandomNumbersList'

export const useRandomBoard = ({ type, size }) => {
  const [board, setBoard] = useState([])

  useEffect(() => {
    console.log('#Hook useRandomBoard')
    const array = generateRandomNumbersList({ size })

    if (type !== 'icons') setBoard(array)
    else {
      setBoard(transformNumbersToIcons(array))
    }
  }, [type, size])
  return [board]
}
