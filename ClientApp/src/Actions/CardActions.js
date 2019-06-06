import { cardConstants } from '../Constants';
import { cardService } from '../Services';
import { history } from '../Helpers';

export const cardActions = {
  loadCards,
  //loadCardData
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

// function loadCardData(id, f) {
//   return dispatch => {
//
//     cardService.loadCardData(id)
//       .then(
//         data => {
//           f(data);
//           console.log('f successfull');
//           return data;
//         },
//         error => {
//           dispatch(failure(id));
//         }
//       );
//   };
//
//   function failure(id) { return { type: cardConstants.LOADCARDDATA_ERROR, id } }
// }