import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as helpers from '../../helpers/helpers';
import './assets/login&register.css';

export default class Register extends Component {

  constructor(){
    super();

    this.state = {
      error : '',
      sendingData: false,
      success: false
    }
  }

  componentWillMount() {
    helpers.showLoadingIndicator();
  }

  componentDidMount() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Register page', 'Register');
    }
  }

  componentDidUpdate() {
    if (Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Register page', 'Register');
    }
  }

  createCustomer = (customer) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/admin/customers.json');
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 201) {
        this.setState({
          error: '',
          success: true
        })
      }
      if (xhr.status === 422 ){
        this.setState({
          error: 'Account with such an email already exists'
        })
      }
      this.setState({
        sendingData: false
      });
    };
    xhr.send(JSON.stringify(customer));
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  register = () => {
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const password = this.password.value;
    const validEmail = this.validateEmail(email);
    this.setState({
      success: false
    });
    if ( password.length < 5 ) {
      this.setState({
        error: 'Password should contain at least 5 characters'
      })
    } else if ( !validEmail ) {
      this.setState({
        error: 'Please enter valid email'
      })
    } else if( firstName === '' || lastName === '' || email === '' || password === '') {
      this.setState({
        error: 'Please fill all the fields above'
      })
    } else {
      this.setState({
        sendingData: true
      });
      const customer = {
        "customer": {
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
          "verified_email": true,
          "send_email_welcome": false,
          "multipass_identifier": password
        }
      };
      this.createCustomer(customer);
    }
  };

  render() {
    let errorMessage,successMessage;
    if ( this.state.error !== '' )
      errorMessage = <h5 className="error-message">{this.state.error}</h5>;
    if ( this.state.success )
      successMessage = <h5 className="success-message">Your account has been created</h5>;
    return (
        <div className="register-template">
          <div className={`register-template__form ${this.state.sendingData ? 'sending-data' : ''}`}>
            <label>First name *</label>
            <input type="text" className="customer-first-name" ref={(input) => { this.firstName = input; }}/>
            <label>Last name *</label>
            <input type="text" className="customer-last-name" ref={(input) => { this.lastName = input; }}/>
            <label>Email *</label>
            <input type="email" className="customer-email" ref={(input) => { this.email = input; }}/>
            <label>Password *</label>
            <input type="password" className="customer-password" ref={(input) => { this.password = input; }}/>
            <a className="register-button" onClick={this.register}>Register</a>
            {errorMessage}
            {successMessage}
            <div className="login-account">
              <span>Already have an account?</span>
              <Link to="/account/login" className="customer-login-link">Login now</Link>
            </div>
          </div>
        </div>
    )
  }
}