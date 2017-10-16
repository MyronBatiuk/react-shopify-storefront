import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import VariantSelector from './VariantSelector';
import ProductImages from './ProductImages';
import ShareButtons from './ShareButtons';
import SizeChart from './SizeChart';
import Designer from './Designer';
import RelatedItems from './RelatedItems';
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

  componentWillReceiveProps(nextProps) {
    let newProduct = nextProps.location.pathname;
    let currentProduct = this.props.location.pathname;
    if (newProduct !== currentProduct) {
      helpers.showLoadingIndicator();
      helpers.getData(newProduct, 'product');
    }
  }

  componentDidUpdate() {
    if (Object.keys(this.props.product).length !== 0 && Object.keys(this.props.header).length !== 0 &&
        Object.keys(this.props.data).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo(this.props.product, this.props.header.shop_name);
    }
  }

  addVariantToCart = () => {
    let product = this.props.product;
    let variantId = this.props.product.selected_variant;
    let currency = this.props.product.currency;
    let cartObject = {
      title: product.title,
      image: product.featured_image,
      price: product.variants[variantId].price,
      quantity: product.selected_quantity,
      option: product.options[0],
      variant: product.variants[variantId].title,
    };
    store.dispatch(actions.addVariantToCart(cartObject, variantId, currency));
    if (!this.props.cart.open)
      store.dispatch(actions.openCart());
  };
  quantityChange = (e) => {
    let quantity = parseInt(e.target.value, 10);
    store.dispatch(actions.changeSelectedQuantity(quantity));
  };

  render() {
    let variantSelectors, comparePrice, productImages, divider;
    const product = this.props.product;
    const data = this.props.data;
    let collections, group, shareButtons, designer, relatedItems;
    const sizeChart = product.size_chart !== '' ? <SizeChart data={product.size_chart}/> : '';
    const states = helpers.states;
    if (Object.keys(product).length !== 0) {
      shareButtons = <ShareButtons product={product}/>;
      if (Object.keys(product.variants).length > 1)
        variantSelectors = <VariantSelector
            variants={product.variants}
        />;
      if (product.hasOwnProperty('designer'))
        designer = <Designer designer={product.designer}/>;
      if (Object.keys(product.product_images).length > 1)
        productImages = <ProductImages
            images={product.product_images}
        />;
      if (product.hasOwnProperty('group')) {
        group = <h4 className="product__group">{product.group}</h4>;
      }
      if (product.selected_compare_price !== '')
        comparePrice =
            <span className="product__compare-price">{product.currency + product.selected_compare_price}</span>;
      const productCollections = product.collections;
      const collectionNumber = Object.keys(productCollections).length;
      if (collectionNumber !== 0) {
        collections = Object.keys(productCollections).map(key => {
              const title = collectionNumber > 1 ? states[productCollections[key].title] : productCollections[key].title;
              const coma = ( collectionNumber === parseInt(key) + 1 ) ? '' : ', ';
              return (
                  <span className="product__collection">
                    <Link key={key} to={`/collections/${productCollections[key].handle}`}>
                      {title}
                    </Link>
                    {coma}
                  </span>
              );
            },
        );
        divider = <span className="breadcrumbs__divider">/</span>;
      }
      if (Object.keys(data).length !== 0)
        relatedItems = <RelatedItems data={data} title={product.title} slug={product.slug}/>;
    }
    return (
        <div className="product-template page-width">
          <div className="grid product-content">
            <div className="grid__item medium-up--seven-twelfths small--full-width content__images">
              <img className="featured-image" src={product.featured_image} alt={product.title}/>
              {productImages}
            </div>
            <div className="grid__item medium-up--five-twelfths small--full-width content__info">
              <ul className="breadcrumbs">
                <li>
                  <Link to="/">All States</Link>
                </li>
                {divider}
                <li className="breadcrumbs__collections">
                  {collections}
                </li>
                <span className="breadcrumbs__divider">/</span>
                <li>
                  {product.title}
                </li>
              </ul>
              <h1 className="product__title">{product.title}</h1>
              {group}
              <span className="product__price">{product.currency + product.selected_price}</span>
              {comparePrice}
              <p className="product__description" dangerouslySetInnerHTML={{__html: product.content}}></p>

              <div className="variants-and-share-buttons">
                {variantSelectors}
                {shareButtons}
              </div>
              {sizeChart}
              <button className="product__add-to-cart" onClick={this.addVariantToCart}>
                <i className="fa fa-plus"></i>
                Add to Cart
              </button>
              {designer}
            </div>
          </div>
          {relatedItems}
        </div>
    );
  }
}