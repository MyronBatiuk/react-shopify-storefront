import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as Helpers from '../../helpers/helpers';

export default class Pagination extends Component {

  loadNewPage = (collection,page) => {
    Helpers.getData(collection, 'collection', page);
  };

  render() {
    let pages = this.props.pages;
    let navLinks = [];
    let collection = this.props.collection;
    for (let i = 1; i <= pages; i++) {
      navLinks.push(<li key={i}>
        <Link to={`${collection}?page=${i}`} onClick={() => this.loadNewPage(collection,i)} >{i}</Link>
      </li>);
    }
    return (
      <ul className="pagination">
        {navLinks}
      </ul>
    )
  }
}

