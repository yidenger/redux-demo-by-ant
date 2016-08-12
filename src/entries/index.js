import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import todoApp from '../reducers/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(todoApp);

import App from '../containers/App';
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
};

render();
