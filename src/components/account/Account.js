import React, {Component} from 'react';
import * as helpers from '../../helpers/helpers';

export default class Account extends Component {

  componentWillMount() {
    helpers.showLoadingIndicator();
  }
  componentDidMount() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Account page', 'Account');
    }
  }
  componentDidUpdate() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Account page', 'Account');
    }
  }
  render(){
    return null;
  }
}