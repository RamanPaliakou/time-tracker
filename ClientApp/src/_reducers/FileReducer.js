import { handleActions } from 'redux-actions';
import { fileConstants } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Constants/Index';

export const fileReducer = handleActions(
  new Map([
    [
      fileConstants.IMAGES_DOWNLOADED,
      (state, action) => ({
        ...state,
        images: action.images,
      }),
    ],
    [
      fileConstants.IMAGES_UPLOADED,
      (state, action) => ({
        ...state,
        reloadAction: true,
      }),
    ],
    [
      fileConstants.TITLE_MODIFIED,
      (state, action) => ({
        ...state,
        titleModified: true,
        reloadAction: true,
        user: action.userID,
      }),
    ],
    [
      fileConstants.DESCRIPTION_MODIFIED,
      (state, action) => ({
        ...state,
        descriptionModified: true,
        reloadAction: true,
        user: action.userID,
      }),
    ],
    [
      fileConstants.IMAGE_DELETED,
      (state, action) => ({
        ...state,
        imageDeleted: true,
        reloadAction: true,
        user: action.userID,
      }),
    ],
    [
      fileConstants.DATA_RELOADED,
      (state, action) => ({
        reloadAction: false,
        user: action.userID,
      }),
    ],
  ]),
  {},
);
