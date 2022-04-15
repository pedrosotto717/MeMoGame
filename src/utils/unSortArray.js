export const unSortArray = (array) => {
  for (let i = 0; i < Math.floor(array.length / 4); i++) {
    array.sort(() => Math.random() - 0.5)
  }

  return array
}
