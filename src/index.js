import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/parks-reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
