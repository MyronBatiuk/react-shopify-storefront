import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as helpers from '../../helpers/helpers';

export default class Navigation extends Component {

  componentDidMount(){
    let listOfItems = this.props.items;
    Object.keys(listOfItems).map((item) => {
      let url = listOfItems[item].url;
      if ( url.includes('pages') ){
        helpers.getData(url, 'page' , false , true);
      }
      return null;
    });
  }

  render(){
    let listOfItems = this.props.items;
    let items = Object.keys(listOfItems).map((item) => {
      let dropdown = listOfItems[item].dropdown;
      if ( Object(dropdown).length !== 0 ){
        let dropdownItems = Object.keys(dropdown).map((item) => {
          return (
            <li key={item} className="dropdown__item">
              <NavLink exact activeClassName="active" to={dropdown[item].url}>
                {dropdown[item].title}
              </NavLink>
            </li>
          )
        });
        return (
          <li key={item} className="nav-item has-dropdown">
            <NavLink exact activeClassName="active" to={listOfItems[item].url}>
              {listOfItems[item].title}
            </NavLink>
            <ul className="nav-item__dropdown">
              {dropdownItems}
            </ul>
          </li>
        )
      } else {
        return (
          <li key={item} className="nav-item">
            <NavLink exact activeClassName="active" to={listOfItems[item].url}>
              {listOfItems[item].title}
            </NavLink>
          </li>
        )
      }
    });
    return (
      <ul className="site-nav">
        {items}
      </ul>
    )
  }
}