import { combineReducers } from 'redux';

import cart from './cart';
import collection from './collection';
import product from './product';
import header from './header';
import data from './data';
import homepage from './homepage';
import page from './page';
import search from './search';
import blog from './blog';
import article from './article';

const rootReducer = combineReducers({header,cart,collection,data,homepage,page,product,search,blog,article });

export default rootReducer;
