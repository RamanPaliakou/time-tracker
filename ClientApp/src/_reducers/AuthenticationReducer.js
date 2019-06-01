import { handleActions } from 'redux-actions';
import { userConstants } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';
import { initialState } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';

const user = JSON.parse(localStorage.getItem('user'));
const currentInitialState = user ? { loggedIn: true, user } : {};

export const authenticationReducer = handleActions(
  new Map([
    [
      userConstants.LOGIN_REQUEST,
      (state, action) => ({
        loggingIn: true,
        email: action.email,
      }),
    ],
    [
      userConstants.LOGIN_SUCCESS,
      (state, action) => ({
        loggedIn: true,
        user: action.user,
      }),
    ],
    [
      userConstants.LOGIN_FAILURE,
      () => ({
      }),
    ],
    [
      userConstants.LOGOUT,
      () => ({
      }),
    ],
  ]),
  currentInitialState,
);
