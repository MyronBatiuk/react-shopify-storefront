import React, {Component} from 'react';
import VariantSelector from './VariantSelector';
import ProductImages from './ProductImages';
import * as helpers from '../../helpers/helpers';
import store from '../../store';
import * as actions from '../../actions/actionCreators';

import './product.css';

export default class Product extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    let productUrl = this.props.location.pathname;
    helpers.getData(productUrl, 'product');
  }
  componentWillReceiveProps(nextProps){
    let newProduct = nextProps.location.pathname;
    let currentProduct = this.props.location.pathname;
    if ( newProduct !== currentProduct ) {
      helpers.showLoadingIndicator();
      helpers.getData(newProduct, 'product');
    }
  }
  componentDidUpdate(){
    helpers.hideLoadingIndicator();
    if ( this.props.header.hasOwnProperty('shop_name') )
      helpers.changeSeo(this.props.product, this.props.header.shop_name);
  }
  addVariantToCart = () => {
    let product = this.props.product;
    let variantId = this.props.product.selected_variant;
    let cartObject = {
      title: product.title,
      image: product.featured_image,
      price: product.variants[variantId].price,
      quantity: product.selected_quantity,
      option: product.options[0],
      variant: product.variants[variantId].title
    };
    store.dispatch(actions.addVariantToCart(cartObject, variantId));
    if (!this.props.cart.open)
      store.dispatch(actions.openCart());
  };
  quantityChange = (e) => {
    let quantity = parseInt(e.target.value, 10);
    store.dispatch(actions.changeSelectedQuantity(quantity));
  };

  render() {
    let variantSelectors, comparePrice, productImages;
    let product = this.props.product;
    if (Object.keys(product).length !== 0) {
      if (Object.keys(product.variants).length > 1)
        variantSelectors = <VariantSelector
          variants={product.variants}
          />;
      if (Object.keys(product.product_images).length > 1)
        productImages = <ProductImages
            images={product.product_images}
        />;
      if ( product.selected_compare_price !== '' )
        comparePrice = <span className="product__compare-price">{product.currency + product.selected_compare_price}</span>
    }
    return (
      <div className="product-template page-width">
        <div className="grid">
          <div className="grid__item medium-up--one-half">
            <img src={product.featured_image} alt={product.title}/>
            {productImages}
          </div>
          <div className="grid__item medium-up--one-half">
            <h1 className="product__title">{product.title}</h1>
            <span className="product__price">{product.currency + product.selected_price}</span>
            {comparePrice}
            <p className="product__description" dangerouslySetInnerHTML={{__html: product.content}}></p>
            {variantSelectors}
            <label className="product__quantity">
              Quantity
              <input min="1" type="number" defaultValue="1" onChange={this.quantityChange}></input>
            </label>
            <button className="product__buy button" onClick={this.addVariantToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}