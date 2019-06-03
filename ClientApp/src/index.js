import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers/Store';
import App from './_containers/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = "/"//document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>, rootElement);

registerServiceWorker();




// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();
  // document.getElementById('app')