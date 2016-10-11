import 'babel-polyfill';
import 'bluecore-ui-kit/lib/typography/Typography';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import DevTools from './dev_tools';

const store = configureStore();

render((
  <Provider store={store}>
    <span>
      <App />
      <DevTools />
    </span>
  </Provider>
), document.getElementById('react-container'));
