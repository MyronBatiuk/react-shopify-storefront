import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    let products = this.props.products;
    products = Object.keys(products).map(key =>
        <Product
          key={products[key].id}
          product={products[key]}
          />
    );
    return (
      <div className="grid grid--view-items">
        {products}
      </div>
    );
  }
}

export default Products;
