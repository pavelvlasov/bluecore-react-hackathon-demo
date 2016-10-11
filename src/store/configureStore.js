/* global process, module */

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import DevTools from '../dev_tools';
import rootReducer from '../reducers';

const configureStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [
      ...middlewares,
      createLogger()
    ];

    middlewares = compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    );
  }

  const store = createStore(
    rootReducer,
    middlewares
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};

export default configureStore;
