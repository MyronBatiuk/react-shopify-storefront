import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class SearchItem extends Component {

  render(){
    const item = this.props.item;
    return (
      <Link to={item.url} className="search-item">
        <h2 className="search-item__title">{item.title}</h2>
        <div className="search-item__content" dangerouslySetInnerHTML={{__html: item.excerpt }}></div>
      </Link>
    );
  }
}