import React,{ Component } from 'react';
import * as helpers from '../../helpers/helpers';
import './notfound.css';

export default class NotFound extends Component {

  componentDidUpdate(){
    if ( Object.keys(this.props.header).length !== 0 )
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'This page was not found on this site.', '404 Not Found');
  }

  render(){
    return(
      <div className="not-found page-width">
        <h1 className="not-found__title">404 Not Found</h1>
      </div>
    )
  }
}