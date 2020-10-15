import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// initial state default
const globalState = {
  totalOrder: 5
}

// Reducer
const rootReducer = (state = globalState, action) => {
  return state;
}

// Store
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
