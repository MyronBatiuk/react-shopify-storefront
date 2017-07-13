import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as helpers from '../../helpers/helpers';
import './assets/login.css';

export default class Login extends Component {

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

  login = () => {
    console.log(this.email.value,this.password.value);
  };

  render() {
    return (
        <div className="login-template">
          <div className="login-template__form">
            <label>Email *</label>
            <input type="email" className="customer-email" ref={(input) => { this.email = input; }}/>
            <label>Password *</label>
            <input type="password" className="customer-password" ref={(input) => { this.password = input; }}/>
            <a className="login-button" onClick={this.login}>Login</a>
            <div className="create-account">
              <span>Not a member?</span>
              <Link to="/account/register" className="customer-register-link">Create an account</Link>
            </div>
          </div>
        </div>
    )
  }
}