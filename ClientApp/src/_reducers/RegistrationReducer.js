import { handleActions } from 'redux-actions';
import { userConstants } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';
import { initialState } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';

export const registrationReducer = handleActions(
  new Map([
    [userConstants.REGISTER_REQUEST,
      (state, action) => ({
        ...state,
        registering: true,
      }),
    ],
    [
      userConstants.REGISTER_SUCCESS,
      (state, action) => ({
      }),
    ],
    [
      userConstants.REGISTER_FAILURE,
      (state, action) => ({
        ...state,
        registering: true,
      }),
    ],
  ]),
  initialState,
);
