import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../Reducers';
import {history} from './History';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

const loggerMiddleware = createLogger();
let store = null;

function initStore() {
  const isDev = process.env.NODE_ENV !== 'production';
  const middleware = applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
    loggerMiddleware);

  store = createStore(
    connectRouter(history)(rootReducer),
    isDev ? composeWithDevTools(middleware) : middleware,
  );

  return store;
}

export function getStore() {
  if (!store) {
    initStore();
  }
  return store;
}