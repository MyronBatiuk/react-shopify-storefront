import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as Helpers from '../../helpers/helpers';

export default class Pagination extends Component {

  loadNewPage = (url,page) => {
    Helpers.getData(url.replace('blog', 'blogs') + '?page=' + page, 'blog');
  };

  render() {
    let navLinks = [];
    let { url, currentPage, pages} = this.props;
    for (let i = 1; i <= pages; i++) {
      if(parseInt(currentPage,10) === i) {
        navLinks.push(<li key={i}>
          <Link className="active" to={`${url}?page=${i}`} onClick={() => this.loadNewPage(url, i)}>{i}</Link>
        </li>);
      } else {
        navLinks.push(<li key={i}>
          <Link to={`${url}?page=${i}`} onClick={() => this.loadNewPage(url, i)}>{i}</Link>
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

