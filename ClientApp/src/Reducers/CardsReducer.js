import {cardConstants} from "../Constants";

export function cards(state = {}, action) {
  switch (action.type) {
    case cardConstants.LOADCARDS_SUCCESS:
      return {
        loadedCards: action.cards
      };
    case cardConstants.LOADCARDS_FAIL:
      return {
        loadCardsFailed: true
      };
    default:
      return state
  }
}