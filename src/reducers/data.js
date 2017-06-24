function data(state = [], action) {
  let newState = Object.assign([], state);
  switch(action.type) {
    case 'GET_ALL_PRODUCTS' :
      const products = action.data['products'];
      Object.keys(products).map(key =>
        newState.push(products[key])
      );
      newState.sort(function(a, b){return b.date-a.date});
      return newState;
    case 'GET_ALL_PAGES' :
      newState.push(action.data);
      return newState;
    default:
      return state;
  }
}

export default data;
