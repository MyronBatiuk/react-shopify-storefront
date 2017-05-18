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

export function getHomeCollection(res) {
  return {
     type:'GET_HOME_COLLECTION',
     data: res
  }
}

export function setCurrentProduct(product) {
  return {
    type:'SET_CURRENT_PRODUCT',
    data: product
  }
}
