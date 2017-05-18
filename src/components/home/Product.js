import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import * as actions from '../../actions/actionCreators';
import store from '../../store';

class Product extends Component {

  handleOnClick = () => {
    store.dispatch(actions.setCurrentProduct(this.props.product));
  };

  render() {
    let variantImage =  this.props.product.images[0].attrs.src.value;
    let variant =  this.props.product.variants[0].attrs;
    return (
      <Link to={`/products/${this.props.product.handle.value}`} onClick={this.handleOnClick} className="Product">
        {this.props.product.images.length ? <img src={variantImage} alt={`${this.props.product.title.value} product shot`}/> : null}
        <h5 className="Product__title">{this.props.product.title.value}</h5>
        <span className="Product__price">${variant.price.value}</span>
      </Link>
    );
  }
}

export default Product;
