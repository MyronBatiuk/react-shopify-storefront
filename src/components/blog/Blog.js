import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';

export default class Blog extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    let location = this.props.location.pathname;
    const queryString = this.props.location.search;
    let page = queryString.split('=')[1];
    if (page === '')
      page = 1;
    helpers.getData(location.replace('blog','blogs'), 'blog', page);
  }
  componentWillReceiveProps(nextProps){
    let newLocation = nextProps.location.pathname;
    let newPage = nextProps.location.search;
    if ( newLocation !== this.props.location.pathname) {
      helpers.showLoadingIndicator();
      helpers.getData(newLocation, 'blog');
    }
    if ( newPage !== this.props.location.search ){
      helpers.showLoadingIndicator();
    }
  }

  componentDidUpdate(){
    if ( Object.keys(this.props.header).length !== 0 && Object.keys(this.props.blog).length !== 0) {
      helpers.changeSeo('', this.props.header.shop_name, this.props.blog.title + ' Blog', this.props.blog.title);
      helpers.hideLoadingIndicator();
    }
  }
  render(){
    return null;
  }
}