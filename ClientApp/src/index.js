import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {getStore} from './Helpers';
import {App} from './App/App.jsx';
import { history } from './Helpers';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = "/";
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={getStore()}>
    <BrowserRouter >
      <App id={'appMain'}/>
    </BrowserRouter>
  </Provider>, rootElement);

registerServiceWorker();




// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();
  // document.getElementById('app')