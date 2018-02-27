
let initialState = {
  wordToGuess: "",
  wordHidden: ""
}


export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'NEW_GAME' :

    return { ...state, wordToGuess: payload.wordToGuess, wordHidden: payload.wordHidden}

    default :
      return state
  }
}
