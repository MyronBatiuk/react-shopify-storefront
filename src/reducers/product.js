function product(state = [], action) {
  switch(action.type) {
    case 'GET_PRODUCT' :
      return action.data;
    case 'CHANGE_SELECTED_VARIANT' :
      return { ...state, selected_variant: action.id, selected_price: action.price, selected_compare_price: action.comparePrice};
    case 'CHANGE_SELECTED_QUANTITY' :
      return { ...state, selected_quantity: action.quantity };
    case 'CHANGE_FEATURED_IMAGE' :
      return { ...state, featured_image: action.image};
    default:
      return state;
  }
}

export default product;
