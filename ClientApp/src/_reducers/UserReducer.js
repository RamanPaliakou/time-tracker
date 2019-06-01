import { handleActions } from 'redux-actions';
import { userConstants } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';
import { initialState } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';

export const userReducer = handleActions(
  new Map([
    [
      userConstants.GETALL_REQUEST,
      (state, action) => ({
        loading: true,
      }),
    ],
    [
      userConstants.GETALL_SUCCESS,
      (state, action) => ({
        items: action.users,
      }),
    ],
    [
      userConstants.GETALL_FAILURE,
      (state, action) => ({
        error: action.error,
      }),
    ],
    [
      userConstants.DELETE_REQUEST,
      (state, action) => ({
        ...state,
        items: state.items.map(user => (user.id === action.id
          ? { ...user, deleting: true }
          : user)),
      }),
    ],
    [
      userConstants.DELETE_SUCCESS,
      (state, action) => ({
        ...state,
        items: state.items.filter(user => user.id !== action.id),
      }),
    ],
    [
      userConstants.DELETE_FAILURE,
      (state, action) => ({
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        }),
      }),
    ],
  ]),
  initialState,
);
