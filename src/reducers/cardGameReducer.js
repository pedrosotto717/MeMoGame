export const cardGameReducer = (state, { type, payload }) => {
  switch (type) {
    case 'FLIPPED_CARD':
      if (!state.card.flipped) {
        return {
          ...state,
          card: {
            flipped: !state.card.flipped,
            value: payload.value,
          },
        }
      } else if (state.card.flipped && !state.secondCard.flipped) {
        return {
          ...state,
          secondCard: {
            flipped: !state.secondCard.flipped,
            value: payload.value,
          },
        }
      } else if (state.card.flipped && state.secondCard.flipped) {
        console.log('Upps!!!')
      }
      break
    case 'MATCH_CARDS':
      if (!state.cardsFlipped.includes(payload.value)) {
        return {
          cardsFlipped: [...state.cardsFlipped, payload.value],
          card: {
            flipped: false,
            value: null,
          },
          secondCard: {
            flipped: false,
            value: null,
          },
        }
      } else return state
    case 'CLEAR_CARDS':
      return {
        ...state,
        card: {
          flipped: false,
          value: null,
        },
        secondCard: {
          flipped: false,
          value: null,
        },
      }
    default:
      return state
  }
}
