import React, { Component } from 'react';
import Products from './Products';
import Pagination from './Pagination';
import Hero from './Hero';
import * as helpers from '../../helpers/helpers';
import './collection.css';

class Collection extends Component {
  componentWillMount() {
    if ( this.props.location.pathname !== "/")
      helpers.showLoadingIndicator();
    let location = this.props.location.pathname;
    let page = this.props.location.search;
    page = page.split('=')[1];
    if (page === '') {
      page = 1;
    }
    if (location === '/') {
      location = '/collections/home';
    }
    helpers.getData(location, 'collection', page);
  }
  componentWillReceiveProps(nextProps){
    let newLocation = nextProps.location.pathname;
    let newPage = nextProps.location.search;
    if ( newPage !== this.props.location.search ){
      helpers.showLoadingIndicator();
      if (newPage === '')
        helpers.getData(newLocation, 'collection');
    }
    if ( newLocation !== this.props.location.pathname) {
      helpers.showLoadingIndicator();
      helpers.getData(newLocation, 'collection');
    }
  }
  componentDidUpdate(){
    if ( this.props.location.pathname !== "/" && Object.keys(this.props.header).length !== 0 && Object.keys(this.props.collection).length !== 0) {
      helpers.changeSeo(this.props.collection, this.props.header.shop_name);
      helpers.hideLoadingIndicator();
    }
  }
  render() {
    let products, pagination;
    let collection = this.props.collection;
    let hero;
    let template = this.props.template;
    const queryString = this.props.location.search;
    let currentPage = queryString.split('page=')[1];
    if (typeof currentPage === 'undefined')
      currentPage = 1;
    if (Object.keys(collection).length !== 0) {
      products = <Products
        products={collection.products}
        />;
      if (collection.pages > 1) {
        pagination = <Pagination
          pages={collection.pages}
          currentPage={currentPage}
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

export default Collection;
