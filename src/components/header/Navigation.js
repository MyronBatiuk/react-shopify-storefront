import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render(){
    let listOfItems = this.props.items;
    let items = Object.keys(listOfItems).map((item) => {
      const url = listOfItems[item].url;
      return (
        <li key={item} className="nav-item">
          <NavLink exact activeClassName="active" to={url.replace('blogs','blog')}>
            {listOfItems[item].title}
          </NavLink>
        </li>
      )
    });
    return (
      <ul className="site-nav">
        {items}
      </ul>
    )
  }
}


export default Navigation;