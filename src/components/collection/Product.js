import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const product = this.props.product;
    const productCollections = product.collections;
    let productCollection;
    if (Object.keys(productCollections).length !== 0) {
      productCollection = Object.keys(productCollections).map(key => {
        return (
          <Link key={key} to={`/collections/${productCollections[key].handle}`}>
            <h4 className="product__collection">{productCollections[key].title}</h4>
          </Link>
        )
      })
    }
    let designer;
    if (product.hasOwnProperty('designer_title'))
      designer = <Link to={`/pages/${product.designer_page}`}>
        <h5 className="product__designer">{product.designer_title}</h5>
      </Link>;
    return (
      <div className="grid__item small--one-half medium-up--one-quarter">
        <div className="product">
          <Link to={`/products/${product.slug}`}>
            <img src={product.featured_image} alt={`${product.title} product shot`}/>

            <h3 className="product__title">{product.title}</h3>
          </Link>
          {designer}
          {productCollection}
          <span className="product__price">{product.price}</span>

        </div>
      </div>
    );
  }
}

export default Product;
