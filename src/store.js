import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

let cart = JSON.parse(localStorage.getItem('cart'));
if ( cart === null ){
  cart = {
    items: {}
  };
}
cart.open = false;
const defaultState = {
  header: [],
  cart,
  collection : [],
  data: [],
  product: [],
  homepage: [],
  page: []
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
