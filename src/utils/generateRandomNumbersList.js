import { unSortArray } from './unSortArray'

export const generateRandomNumbersList = ({ size } = { size: 12 }) => {
  const array = []

  for (let i = 0; i < size / 2; i++) {
    let num = null
    do {
      num = Math.floor(Math.random() * 39)
    } while (array.includes(num))
    array.push(num)
  }

  const arrayIndex = unSortArray([...array, ...array])
  const arrayValues = arrayIndex.map((n) => (n < 10 ? n + 80 : n * 2))

  return arrayIndex.map((numberIndex, i) => {
    return { index: numberIndex, value: arrayValues[i] }
  })
}
