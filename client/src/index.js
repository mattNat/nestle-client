import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import PostsIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <PostsIndex />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
