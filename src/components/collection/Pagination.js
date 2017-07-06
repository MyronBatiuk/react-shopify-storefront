import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as Helpers from '../../helpers/helpers';

export default class Pagination extends Component {

  loadNewPage = (collection,page) => {
    Helpers.getData(collection, 'collection', page);
  };

  render() {
    let navLinks = [];
    let { collection, currentPage, pages} = this.props;
    for (let i = 1; i <= pages; i++) {
      if(parseInt(currentPage,10) === i) {
        navLinks.push(<li key={i}>
          <Link className="active" to={`${collection}?page=${i}`} onClick={() => this.loadNewPage(collection, i)}>{i}</Link>
        </li>);
      } else {
        navLinks.push(<li key={i}>
          <Link to={`${collection}?page=${i}`} onClick={() => this.loadNewPage(collection, i)}>{i}</Link>
        </li>);
      }
    }
    return (
      <ul className="pagination">
        {navLinks}
      </ul>
    )
  }
}

