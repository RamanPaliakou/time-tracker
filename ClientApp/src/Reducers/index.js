import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import { users } from './UsersReducer';

const rootReducer = combineReducers({
  authentication,
  users,
});

export default rootReducer;