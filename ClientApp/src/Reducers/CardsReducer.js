import {cardConstants} from "../Constants";

export function cards(state = {}, action) {
  switch (action.type) {
    case cardConstants.LOADCARDS_SUCCESS:
      return {
        loadCardsOk: true,
        loadedCards: action.cards
      };
    case cardConstants.LOADCARDS_STARTED:
      return {
      };
    case cardConstants.LOADCARDS_FAIL:
      return {
        loadCardsOk: false
      };
    case cardConstants.LOADCARDDATALOADCARDDATA_ERROR:
      return {
        failCardId: action.id
      };
    default:
      return state
  }
}