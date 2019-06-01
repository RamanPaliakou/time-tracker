import { messageConstants } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';
import {handleActions} from "redux-actions";
import {initialState} from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';

export const messageReducer = handleActions(
  new Map ([
    [
      messageConstants.SUCCESS,
      (state, action) => ({
        type: 'alert-success',
        ...state,
        message: action.message
      })
    ],
    [
      messageConstants.ERROR,
      (state,action) => ({
        ...state,
        type: 'alert-danger',
        message: action.message
      })
    ],
    [
      messageConstants.CLEAR,
      (state, action) => ({
      })
    ]
  ]),
  initialState
);