import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// adds the MIDDLEWARE to use promises with redux, to handle AJAX requests
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// the ReduxPromise function is passed into the applyMiddleware argument, adding it to our application
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.application'));
