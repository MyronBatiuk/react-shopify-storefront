import React, { Component } from 'react';
import Hero from './Hero';
import ProductsGrid from './ProductsGrid';
import * as helpers from '../../helpers/helpers';
import './collection.css';

export default class Collection extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    let collection = this.props.location.pathname;
    helpers.getData(collection, 'collection');
  }
  componentWillReceiveProps(nextProps) {
    let newCollection = nextProps.location.pathname;
    if (newCollection !== this.props.location.pathname) {
      helpers.showLoadingIndicator();
      helpers.getData(newCollection, 'collection');
    }
  }

  componentDidUpdate() {
    if (Object.keys(this.props.header).length !== 0 && Object.keys(this.props.data).length !== 0 && Object.keys(this.props.collection).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo(this.props.collection, this.props.header.shop_name);
    }
  }

  render() {
    const collection = this.props.collection;
    const header = this.props.header;
    const data = this.props.data;
    let productsFilters, productsGrid, hero;
    if (Object.keys(collection).length !== 0)
      hero = <Hero collection={collection}/>;
    if (Object.keys(header).length !== 0 && Object.keys(data).length !== 0 && Object.keys(collection).length !== 0) {
      productsFilters = header.filters;
      productsGrid = <ProductsGrid data={data} filters={productsFilters} collection={collection.title}/>
    }
    return (
      <div className="collection-template">
        {hero}
        {productsGrid}
      </div>

    );
  }
}