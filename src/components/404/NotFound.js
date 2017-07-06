import React, {Component} from 'react';
import * as helpers from '../../helpers/helpers';
import './not-found.css'

export default class NotFount extends Component {
  componentDidUpdate() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.changeSeo('', this.props.header.shop_name, 'This page was not found on this site.', '404 Not Found');
      helpers.hideLoadingIndicator();
    }
  }

  render() {
    return (
        <div className="not-found">
          <h1 className="not-found__title">404 Not Found</h1>
        </div>
    )
  }
}