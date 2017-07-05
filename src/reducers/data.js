function data(state = [], action) {
  let newState = Object.assign([], state);
  switch(action.type) {
    case 'GET_ALL_PRODUCTS' :
      const products = action.data['products'];
      Object.keys(products).map((item) =>
        newState.push(products[item])
      );
      return newState;
    default:
      return state;
  }
}

export default data;
