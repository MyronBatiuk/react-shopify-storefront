export function openCart() {
  return {
    type: 'OPEN_CART'
  }
}

export function closeCart(index) {
  return {
    type: 'CLOSE_CART'
  }
}

export function getData(template,object,page,getAllPages) {
  let type;
  switch (template) {
    case 'header':
      type = 'GET_HEADER';
      break;
    case 'home':
      type = 'GET_HOME_PAGE';
      break;
    case 'collection':
      type = 'GET_COLLECTION';
      break;
    case 'product':
      type = 'GET_PRODUCT';
      break;
    case 'all-products':
      type = 'GET_ALL_PRODUCTS';
      break;
    case 'page':
      if ( getAllPages ) {
        type = 'GET_ALL_PAGES';
      } else {
        type = 'GET_PAGE';
      }
      break;
    default :
      type = '';
  }
  return {
    type: type,
    data: object,
    page: page
  }
}

export function changeSelectedVariant(id,price,comparePrice) {
  return {
    type:'CHANGE_SELECTED_VARIANT',
    id:id,
    price: price,
    comparePrice: comparePrice
  }
}

export function changeSelectedQuantity(quantity) {
  return {
    type:'CHANGE_SELECTED_QUANTITY',
    quantity: quantity
  }
}

export function addVariantToCart(product,id,currency) {
  return {
    type:'ADD_VARIANT_TO_CART',
    product: product,
    id: id.toString(),
    currency: currency
  }
}

export function updateQuantityInCart(itemId,operation){
  return {
    type:'UPDATE_QUANTITY',
    id: itemId.toString(),
    operation: operation
  }
}

export function removeItemFromCart(itemId){
  return {
    type:'REMOVE_ITEM',
    id: itemId.toString()
  }
}