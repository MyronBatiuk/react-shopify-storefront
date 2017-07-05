import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as Helpers from '../../helpers/helpers';

export default class Pagination extends Component {

  loadNewPage = (url) => {
    Helpers.getData(url, 'search');
  };

  render() {
    let navLinks = [];
    let { searchString,pages } = this.props;
    for (let i = 1; i <= pages; i++) {
      navLinks.push(<li key={i}>
        <Link to={`/find?q=${searchString}&page=${i}`} onClick={() => this.loadNewPage('/search?q=' + searchString + '&page='+ i)} >{i}</Link>
      </li>);
    }
    return (
        <ul className="pagination">
          {navLinks}
        </ul>
    )
  }
}

