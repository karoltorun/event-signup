import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import updateReducer from './reducers/updateReducer'

const store = createStore(updateReducer
  ,applyMiddleware(thunk) )

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);

