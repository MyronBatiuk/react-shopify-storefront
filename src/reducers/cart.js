function cart(state = [], action) {
  switch(action.type) {
    case 'OPEN_CART' :
      return true;
    case 'CLOSE_CART':
      return false;
    default:
      return state;
  }
}

export default cart;
