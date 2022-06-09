import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Router} from 'react-router-dom'
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import News from './components/News';

 

ReactDOM.render(
  <Provider store={store}>
     <News />
  </Provider>,
  document.getElementById('root')
);


