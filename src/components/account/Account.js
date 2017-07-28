import React, {Component} from 'react';
import * as helpers from '../../helpers/helpers';
import Settings from './Settings';
import Addresses from './Addresses';
import Orders from './Orders';
import './assets/account.css';

export default class Account extends Component {

  constructor(){
    super();

    this.state = {
      customer : {}
    }
  }

  componentWillMount() {
    helpers.showLoadingIndicator();
    const customerId = localStorage.getItem('customerId');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/admin/customers/' + customerId + '.json');
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const object = response.customer;
        this.setState({
          customer: object
        });
      }
    };
    xhr.send();

  }
  componentDidUpdate() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Account page', 'Account');
    }
  }

  updateCustomer = (customer) => {
    this.setState({
      customer
    })
  };

  render(){
    let settings, addresses, orders;
    const customer = this.state.customer;
    if (Object.keys(customer).length !== 0) {
      settings = <Settings customer={customer} updateCustomer={this.updateCustomer}/>;
      addresses = <Addresses addresses={customer.addresses}/>;
      orders = <Orders customer={customer}/>;
    }
    return (
        <div className="my-account page-width">
          <h1 className="my-account__title">My account</h1>
          {settings}
          {addresses}
          {orders}
        </div>
    );
  }
}