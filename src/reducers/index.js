import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cart';
import homeCollection from './homeCollection';

const rootReducer = combineReducers({cart,homeCollection,routing: routerReducer });

export default rootReducer;
