import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as helpers from '../../helpers/helpers';
import './assets/login&register.css';

export default class Login extends Component {

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
      helpers.changeSeo('', this.props.header.shop_name, 'Login page', 'Login');
    }
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  checkCustomerCredentials = (email,password) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/admin/customers/search.json?query=email:' + email);
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const object = response.customers;
        if ( Object.keys(object).length === 0 ) {
          this.setState({
            error: 'Account with such an email does not exist'
          });
        } else {
          const customer = object['0'];
          if ( customer.multipass_identifier === password ) {
            this.setState({
              error: '',
              success: true
            });
            localStorage.setItem('user', email);
            setTimeout(function () {
              window.location="/account";
            },1000)
          } else {
            this.setState({
              error: 'Password does not match this account'
            });
          }
        }
      }
      this.setState({
        sendingData: false
      });
    };
    xhr.send();
  };
  login = () => {
    const email = this.email.value;
    const password = this.password.value;
    const validEmail = this.validateEmail(email);
    if ( email === '' || password === '') {
      this.setState({
        error: 'Please fill all the fields above'
      });
    } else if ( !validEmail ) {
      this.setState({
        error: 'Please enter valid email'
      });
    } else if ( password.length < 5 ){
      this.setState({
        error: 'Password should contain at least 5 characters'
      });
    } else {
      this.setState({
        sendingData: true
      });
      this.checkCustomerCredentials(email, password);
    }
  };

  render() {
    let errorMessage,successMessage;
    if ( this.state.error !== '' )
      errorMessage = <h5 className="error-message">{this.state.error}</h5>;
    if ( this.state.success )
      successMessage = <h5 className="success-message">You've successfully logined into your account</h5>;
    return (
        <div className="login-template">
          <div className={`login-template__form ${this.state.sendingData ? 'sending-data' : ''}`}>
            <label>Email *</label>
            <input type="email" className="customer-email" ref={(input) => { this.email = input; }}/>
            <label>Password *</label>
            <input type="password" className="customer-password" ref={(input) => { this.password = input; }}/>
            <a className="login-button" onClick={this.login}>Login</a>
            <div className="create-account">
              <span>Not a member?</span>
              <Link to="/account/register" className="customer-register-link">Create an account</Link>
            </div>
            {errorMessage}
            {successMessage}
          </div>
        </div>
    )
  }
}