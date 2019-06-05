import { cardConstants } from '../Constants';
import { cardService } from '../Services';
import { history } from '../Helpers';

export const cardActions = {
  loadCards
};

function loadCards(email) {
  return dispatch => {
    dispatch(request({ email }));

    cardService.loadCards(email)
      .then(
        cards => {
          dispatch(success(cards));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request() { return { type: cardConstants.LOADCARDS_STARTED  } }
  function success(cards) { return { type: cardConstants.LOADCARDS_SUCCESS, cards } }
  function failure() { return { type: cardConstants.LOADCARDS_FAIL } }
}
