import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';
import Hero from './Hero';
import ProductsGrid from '../collection/ProductsGrid';

export default class Home extends Component {

  componentWillMount(){
    helpers.showLoadingIndicator();
    helpers.getData('/pages/home', 'home');
  }
  componentDidUpdate(){
    if (Object.keys(this.props.header).length !== 0 && Object.keys(this.props.homepage).length !== 0 && Object.keys(this.props.data).length !== 0) {
      helpers.changeSeo(null, this.props.header.shop_name, this.props.header.shop_description);
      helpers.hideLoadingIndicator();
    }
  }
  render(){
    const homepage = this.props.homepage;
    const data = this.props.data;
    const header = this.props.header;
    let hero,productsFilters,productsGrid;
    if (Object.keys(homepage).length !== 0) {
      if ( homepage.hasOwnProperty('hero') ){
        hero = <Hero data={homepage.hero}/>
      }
      productsFilters = homepage.filters;
      if (Object.keys(data).length !== 0) {
        productsGrid = <ProductsGrid data={data} filters={productsFilters}/>
      }
    }
    if (Object.keys(header).length !== 0) {
      productsFilters = header.filters;
      if (Object.keys(data).length !== 0) {
        productsGrid = <ProductsGrid data={data} filters={productsFilters} collection=""/>
      }
    }
    return (
      <div className="home">
        {hero}
        {productsGrid}
      </div>
    );
  }
}