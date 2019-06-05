import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import { users } from './UsersReducer';
import { cards } from './CardsReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  cards,
});

export default rootReducer;