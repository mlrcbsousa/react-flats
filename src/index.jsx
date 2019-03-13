// external
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal
import '../assets/stylesheets/application.scss';
import App from './components/app';
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

// gather reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// load App
const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>,
    root
  );
}

// empty object is the initial redux state
// if you want to initialize on load, from server side, push initial state
// so react loads faster
