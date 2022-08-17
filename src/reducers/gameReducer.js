export const ACTION_TYPES = {
  toggleTheme: 'TOGGLE_THEME',
  updateBoard: 'UPDATE_BOARD',
}

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.toggleTheme:
      return {
        ...state,
        themeLight: state.themeLight,
      }
    case ACTION_TYPES.updateBoard:
      return {
        ...state,
        boardSettings: {
          type: payload.type,
          size: payload.size,
          time: payload.time,
        },
      }
    default:
      return state
  }
}
