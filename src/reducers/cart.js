function cart(state = [], action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_VARIANT_TO_CART':
      if (action.id in newState.items) {
        newState.items[action.id].quantity += action.product.quantity;
      } else {
        newState.items[action.id] = action.product;
      }
      if ( !newState.hasOwnProperty('currency') )
        newState['currency'] = action.currency;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case 'UPDATE_QUANTITY':
      newState.items[action.id].quantity = action.quantity;
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case 'REMOVE_ITEM':
      delete newState.items[action.id];
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case 'OPEN_CART' :
      return { ...state, open: true };
    case 'CLOSE_CART':
      return { ...state, open: false };
    default:
      return state;
  }
}

export default cart;
