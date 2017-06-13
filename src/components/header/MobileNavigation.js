import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MobileNavigation extends Component {
  render() {
    let listOfItems = this.props.items;
    let status = this.props.status;
    let items = Object.keys(listOfItems).map((item) => {
      return (
        <li key={item} className="mobile-nav__item">
          <NavLink exact activeClassName="active" to={listOfItems[item].url}>
            {listOfItems[item].title}
          </NavLink>
        </li>
      )
    });
    return (
      <nav className={`mobile-nav-wrapper medium-up--hide ${status ? 'open' : ''}`}>
        <ul className="mobile-nav">
          {items}
        </ul>
      </nav>
    )
  }
}