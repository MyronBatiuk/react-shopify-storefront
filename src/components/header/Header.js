import React, { Component } from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/">
                Custom-storefront
              </Link>
            </div>
            <div className="col-sm-6">
              <Navigation/>
            </div>
            <div className="col-sm-3">
              <SearchForm/>
              <span onClick={this.props.openCart}>Cart</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;