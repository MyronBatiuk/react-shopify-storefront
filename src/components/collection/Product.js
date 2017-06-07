import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    let product = this.props.product;
    let max_price;
    if ( product.price_min !== product.price_max ) {
      max_price = <span className="Product__price"> - {product.price_max}</span>;
    }
    return (
      <div className="grid__item small--one-half medium-up--one-quarter">
        <Link to={`/products/${product.slug}`} className="Product">
          {product.featured_image.length ?
            <img src={product.featured_image} alt={`${product.title} product shot`}/> : null}
          <h5 className="Product__title">{product.title}</h5>
          <span className="Product__price">{product.price_min}</span>
          {max_price}
        </Link>
      </div>
    );
  }
}

export default Product;
