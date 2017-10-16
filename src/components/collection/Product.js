import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as helpers from '../../helpers/helpers';

class Product extends Component {
  render() {
    const product = this.props.product;
    const productCollections = product.collections;
    const collectionNumber = Object.keys(productCollections).length;
    const states = helpers.states;
    let productCollection;
    if (collectionNumber !== 0) {
        productCollection = Object.keys(productCollections).map(key => {
          const title = collectionNumber > 1 ? states[productCollections[key].title] : productCollections[key].title;
          const coma = ( collectionNumber === parseInt(key) + 1 ) ? '' : ', ';
          return (
              <li className="product__collection">
                <Link key={key} to={`/collections/${productCollections[key].handle}`}>
                  {title}
                </Link>
                {coma}
              </li>
          );
        });
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
            <ul className="product__collections">
              {productCollection}
            </ul>
            <span className="product__price">{product.price}</span>

          </div>
        </div>
    );
  }
}

export default Product;
