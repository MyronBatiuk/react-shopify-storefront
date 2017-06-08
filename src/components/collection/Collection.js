import React, { Component } from 'react';
import Products from './Products';
import Pagination from './Pagination';
import Hero from './Hero';
import * as helpers from '../../helpers/helpers';
import './collection.css';

export default class Collection extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    let collection = this.props.location.pathname;
    let page = this.props.location.search;
    page = page.split('=')[1];
    if (page === '') {
      page = 1;
    }
    if (collection === "/") {
      collection = '/collections/home';
    }
    helpers.getData(collection, 'collection', page);
  }
  componentWillReceiveProps(nextProps){
    let newCollection = nextProps.location.pathname;
    let newPage = nextProps.location.search;
    if ( newPage !== this.props.location.search ){
      helpers.showLoadingIndicator();
    }
    if ( newCollection !== this.props.location.pathname ) {
      helpers.showLoadingIndicator();
      if ( newCollection === "/" ) {
        newCollection = '/collections/home';
      }
      helpers.getData(newCollection, 'collection');
    }
  }
  componentDidUpdate(){
    if ( this.props.location.pathname !== "/" && Object.keys(this.props.header).length !== 0 && Object.keys(this.props.collection).length !== 0 ) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo(this.props.collection, this.props.header.shop_name);
    }
  }
  render() {
    let products, pagination;
    let collection = this.props.collection;
    let hero;
    let template = this.props.template;
    if (Object.keys(collection).length !== 0) {
      products = <Products
        products={collection.products}
        />;
      if (collection.pages > 1) {
        pagination = <Pagination
          pages={collection.pages}
          collection={this.props.location.pathname}
          />;
      }
      if (template !== 'home') {
        hero = <Hero
          title={collection.title}
          image={collection.image}
          />;
      }
    }

    return (
      <div className="collection">
        {hero}
        <div className="collection-content page-width">
          {products}
          {pagination}
        </div>
      </div>

    );
  }
}