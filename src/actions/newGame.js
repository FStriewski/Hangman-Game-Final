import { NEW_GAME } from './types'
import {wordToGuess, wordHidden} from '../components/wordRepos'

export const newGame = () => {

  return {
    type: NEW_GAME,
    payload: {
      wordToGuess,
      wordHidden
    }
  }
}
