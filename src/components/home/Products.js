import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    let productsStatus = this.props.products;
    let products;
    if (productsStatus !== null ) {
      let productsObject = this.props.products.attrs.products;
      delete productsObject.type;
      products = Object.keys(productsObject).map(key =>
        (
            <Product
              addVariantToCart={this.props.addVariantToCart}
              key={productsObject[key].attrs.id.value.toString()}
              product={productsObject[key].attrs}
              />
        )
      )
    } else {
      products = 'Loading...'
    }
    return (
      <div className="Product-wrapper">
        {products}
      </div>
    );
  }
}

export default Products;
