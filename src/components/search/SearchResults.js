import React, { Component} from 'react';
import SearchItem from './SearchItem';
import Pagination from './Pagination';
import * as helpers from '../../helpers/helpers';
import * as actions from '../../actions/actionCreators';
import store from '../../store';
import './search.css';

export default class SearchResults extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    const queryString = this.props.location.search;
    helpers.getData('/search' + queryString, 'search');
  }
  componentWillReceiveProps(nextProps){
    const queryString = this.props.location.search;
    const newQueryString = nextProps.location.search;
    if ( queryString !== newQueryString ){
      helpers.showLoadingIndicator();
      store.dispatch(actions.cleanSearch());
      helpers.getData('/search' + newQueryString, 'search');
    }
  }
  componentDidUpdate(prevProps){
    if ( Object.keys(this.props.search).length !== 0 && Object.keys(this.props.header).length !== 0 && prevProps.location.search === this.props.location.search){
      helpers.hideLoadingIndicator();
      helpers.changeSeo('', this.props.header.shop_name, 'Search page', 'Search');
    }
  }
  render() {
    const queryString = this.props.location.search;
    let searchString = queryString.split('q=')[1];
    if ( searchString.indexOf('&') !== -1 )
      searchString = searchString.substr(0, searchString.indexOf('&'));
    const currentPage = queryString.split('page=')[1];

    const search = this.props.search;
    let searchResultsItems,pagination;
    if (Object.keys(search).length !== 0) {
      searchResultsItems = Object.keys(search.results).map(key => (
          <SearchItem key={key} item={search.results[key]}/>
      ));
      if (search.pages > 1)
        pagination = <Pagination
            pages={search.pages}
            currentPage={currentPage}
            searchString={searchString}
        />;
    }
    return (
      <div className="search-results page-width">
        <h3 className="search-results__title">Search results for "{searchString}":</h3>
        {searchResultsItems}
        {pagination}
      </div>
    );
  }
}