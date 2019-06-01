import { combineReducers } from 'redux';

import { authenticationReducer } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Reducers/AuthenticationReducer';
import { registrationReducer } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Reducers/RegistrationReducer';
import { userReducer } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Reducers/UserReducer';
import { messageReducer } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Reducers/MessageReducer';
import { fileReducer } from 'c:/Users/R.O.M/Downloads/REACT/app/src/Reducers/FileReducer';

const rootReducer = combineReducers({
  authenticationReducer,
  registrationReducer,
  userReducer,
  messageReducer,
  fileReducer,
});

export default rootReducer;
