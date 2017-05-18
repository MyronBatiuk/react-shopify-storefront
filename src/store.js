import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/index';
import homeCollection from './data/homeCollection';

const defaultState = {
  cart : false,
  homeCollection : null
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
