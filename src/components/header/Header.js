import React, { Component } from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom';
import store from '../../store';
import * as actions from '../../actions/actionCreators';
import * as helpers from '../../helpers/helpers';
import './header.css';

class Header extends Component {

  componentWillMount() {
    helpers.getData('/pages/home', 'header');
  }
  componentDidUpdate() {
    if ( this.props.location.pathname === "/" && this.props.header.hasOwnProperty('shop_name')) {
      helpers.changeSeo(null, this.props.header.shop_name, this.props.header.shop_description);
    }
  }
  constructor() {
    super();

    this.state = {
      mobileNavIsOpen: false
    }
  }

  collapseNav = () => {
    this.setState({
      mobileNavIsOpen: !this.state.mobileNavIsOpen
    })
  };

  openCart = () => {
    store.dispatch(actions.openCart());
  };

  render() {
    let header = this.props.header;
    let logo, navigation, mobileNavigation;
    if (Object.keys(header).length !== 0) {
      if (header.logo_src !== '') {
        logo = <img className="logo" src={header.logo_src} alt=""/>
      } else {
        logo = <h3>{header.shop_name}</h3>;
      }
      if (Object.keys(header.navigation).length !== 0) {
        navigation = <Navigation items={header.navigation}/>;
        mobileNavigation = <MobileNavigation items={header.navigation} status={this.state.mobileNavIsOpen}/>;
      }
    }

    return (
      <div className="header-section">
        <header className="site-header">
          <div className="grid grid--no-gutters grid--table">
            <div className="grid__item small--one-half medium-up--one-quarter">
              <Link to="/">
                {logo}
              </Link>
            </div>
            <div className="grid__item medium-up--one-half small--hide">
              {navigation}
            </div>
            <div className="grid__item small--one-half medium-up--one-quarter site-header__icons">
              <div className="site-header__icons-wrapper">
                <SearchForm history={this.props.history} />
                <span onClick={this.openCart} className="site-header__cart">
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
                  </svg>
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

export default Header;