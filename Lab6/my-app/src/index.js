import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Bar from './Bar';
import store from './store';
import List from './list';



ReactDOM.render(
  <Provider store={store}>
    <Bar />
    <List name="Lista Zakupów" />        
  </Provider>,
  document.getElementById('root')
);

