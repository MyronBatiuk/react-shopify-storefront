import React, { Component } from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom';
import store from '../../store';
import * as actions from '../../actions/actionCreators';
import * as helpers from '../../helpers/helpers';
import CartIcon from './assets/cart-icon.svg';
import './header.css';

export default class Header extends Component {

  componentWillMount() {
    helpers.getData('/pages/home', 'header');
  }

  constructor() {
    super();
    this.state = {
      mobileNavIsOpen: false
    }
  }

  collapseNav = () => {
    //open mobile-nav
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      setTimeout(() =>{
        mobileNav.classList.remove('show');
      },450);
    } else {
      mobileNav.classList.add('show');
      setTimeout(() =>{
        mobileNav.classList.add('open');
      },1);
    }
    //change button icon
    this.setState({
      mobileNavIsOpen: !this.state.mobileNavIsOpen
    });
  };

  openCart = () => {
    store.dispatch(actions.openCart());
  };

  render() {
    let header = this.props.header;
    let logo, navigation, mobileNavigation;
    if (Object.keys(header).length !== 0) {
      if ( header.hasOwnProperty('logo_src') ) {
        logo = <img className="logo" src={header.logo_src} alt=""/>
      } else {
        logo = <h3 className="shop-title">{header.shop_name}</h3>;
      }
      if (Object.keys(header.navigation).length !== 0) {
        navigation = <Navigation items={header.navigation}/>;
        mobileNavigation = <MobileNavigation items={header.navigation}/>;
      }
    }

    return (
      <div className="header-section page-width">
        <header className="site-header">
          <div className="grid grid--no-gutters grid--table">
            <div className="grid__item small--one-half medium-up--one-quarter">
              <Link to="/">
                {logo}
              </Link>
            </div>
            <div className="grid__item small--one-half medium-up--three-quarters site-header__icons">
              {navigation}
              <div className="site-header__icons-wrapper">
                <span onClick={this.openCart} className="site-header__cart">
                  <img className="icon icon-cart" src={CartIcon} alt=""/>
                </span>
                <button type="button" className={`site-header__mobile-menu ${this.state.mobileNavIsOpen ? 'open' : ''}`}
                        onClick={this.collapseNav}>
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger" viewBox="0 0 37 40"><path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
                  </svg>
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-close" viewBox="0 0 37 40"><path d="M21.3 23l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-11 11-11-11c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11-11 11c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l11-11 11 11c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-11-11z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        {mobileNavigation}
      </div>
    )
  }
}