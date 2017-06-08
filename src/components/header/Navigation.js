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
      return (
        <li key={item} className="nav-item">
          <NavLink exact activeClassName="active" to={listOfItems[item].url}>
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