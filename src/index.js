import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { rootReducer } from './store/root';
import { sagaWatcher } from './store/sagas';
import './index.css';


const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
));

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
