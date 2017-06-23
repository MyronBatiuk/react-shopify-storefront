import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AvailableProduct extends Component {

  render() {
    const item = this.props.item;
    let collection, collections = item.collections;
    if (Object.keys(collections).length !== 0)
      collection = <Link className="related-item__collection" to={`/collections/${collections['0'].handle}`}>
        {collections['0'].title}
      </Link>;
    return (
      <div className="grid__item medium-up--one-quarter related-item">
        <Link to={`/products/${item.slug}`}>
          <img className="related-item__image" src={item.featured_image} alt=""/>
        </Link>
        <Link to={`/products/${item.slug}`}>
          <h4 className="related-item__title">{item.title}</h4>
        </Link>
        <Link to={`/products/${item.slug}`}>
          <h5 className="related-item__group">{item.group}</h5>
        </Link>

        <div className="related-item__price-wrapper">
          {collection}
          <span className="related-item__price">{item.price}</span>
        </div>
      </div>
    )
  }
}