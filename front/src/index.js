/**
 * 项目入口
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { rootReducer } from './rootReducer';

ReactDOM.render(
  <Provider store={store}>
    <App>
      { rootReducer }
    </App>
  </Provider>
  , document.getElementById('root'));
