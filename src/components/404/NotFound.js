import React,{ Component } from 'react';
import * as helpers from '../../helpers/helpers';

export default class NotFount extends Component {

  componentDidUpdate(){
    if ( this.props.header.hasOwnProperty('shop_name') )
      helpers.changeSeo('', this.props.header.shop_name, 'This page was not found on this site.', '404 Not Found');
  }

  render(){
    return(
      <h1>404 Not Found</h1>
    )
  }
}