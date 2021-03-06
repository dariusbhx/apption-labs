import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware,compose} from 'redux'
import {reducers} from './reducers' 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



