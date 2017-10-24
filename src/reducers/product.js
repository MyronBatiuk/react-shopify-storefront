function product(state = [], action) {
  switch (action.type) {
    case 'GET_PRODUCT' :
      return action.data;
    case 'CHANGE_SELECTED_VARIANT' :
      return {
        ...state,
        selected_variant: action.id,
        selected_price: action.price,
        selected_compare_price: action.comparePrice,
      };
    case 'CHANGE_SELECTED_QUANTITY' :
      return {...state, selected_quantity: action.quantity};
    case 'CHANGE_FEATURED_IMAGE' :
      return { ...state, featured_image: action.image};
    case 'CHANGE_SELECTED_VARIANT_BY_IMAGE' :
      const variants = state.variants;
      let i = 0, selectedVariant, selectedPrice, selectedComparePrice;
      Object.keys(variants).map(key => {
        if (variants[key].image_url === action.image && i === 0) {
          selectedVariant = parseInt(variants[key].id, 10);
          selectedPrice = variants[key].price;
          selectedComparePrice = variants[key].compare_at_price;
          i = 1;
        }
      });
      return {
        ...state,
        selected_variant: selectedVariant,
        selected_price: selectedPrice,
        selected_compare_price: selectedComparePrice,
      };
    default:
      return state;
  }
}

export default product;
