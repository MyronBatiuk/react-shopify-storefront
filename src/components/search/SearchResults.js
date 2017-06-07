import React, { Component} from 'react';
import SearchItem from './SearchItem';
import * as helpers from '../../helpers/helpers';
import './search.css';

export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
      searchExpression: ''
    };
  }

  componentWillMount() {
    const data = this.props.data;
    let search = this.props.history.location.search;
    search = search.split('=')[1];
    search = search.toLowerCase();
    this.setState({
      searchExpression: search
    });
    let results = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (data[i].hasOwnProperty('vendor')) {
        if (data[i].title.toLowerCase().includes(search) || data[i].slug.toLowerCase().includes(search)
          || data[i].type.toLowerCase().includes(search) || data[i].vendor.toLowerCase().includes(search)
          || data[i].description.toLowerCase().includes(search) || data[i].content.toLowerCase().includes(search)) {
          results.push(i);
        }
      } else {
        if (data[i].title.toLowerCase().includes(search) || data[i].content.toLowerCase().includes(search)) {
          results.push(i);
        }
      }
    }
    this.setState({
      searchResults: results
    });

  }

  componentWillReceiveProps(nextProps) {
    const data = this.props.data;
    const newData = nextProps.data;
    let oldLength = Object.keys(data).length;
    let newLength = Object.keys(newData).length;
    let search = this.props.history.location.search;
    let newSearch = false;
    search = search.split('=')[1];
    search = search.toLowerCase();
    if ( search !== this.state.searchExpression ) {
      this.setState({
        searchResults: [],
        searchExpression: search
      });
      oldLength = 0;
      newSearch = true;
    }
    let results = [];
    for (let i = oldLength; i < newLength; i++) {
      if (newData[i].hasOwnProperty('vendor')) {
        if (newData[i].title.toLowerCase().includes(search) || newData[i].slug.toLowerCase().includes(search)
          || newData[i].type.toLowerCase().includes(search) || newData[i].vendor.toLowerCase().includes(search)
          || newData[i].description.toLowerCase().includes(search) || newData[i].content.toLowerCase().includes(search)) {
          results.push(i);
        }
      } else {
        if (newData[i].title.toLowerCase().includes(search) || newData[i].content.toLowerCase().includes(search)) {
          results.push(i);
        }
      }
    }
    if ( !newSearch )
      results = this.state.searchResults.concat(results);
    this.setState({
      searchResults: results
    });
  }

  componentDidUpdate(){
    if ( this.props.header.hasOwnProperty('shop_name') )
      helpers.changeSeo('', this.props.header.shop_name, 'Search page', 'Search');
  }

  render() {
    const data = this.props.data;
    const searchResults = this.state.searchResults;
    let search = this.props.history.location.search;
    search = search.split('=')[1];
    search = search.toLowerCase();
    let searchResultsItems = Object.keys(searchResults).map(key => {
      if (data[searchResults[key]].hasOwnProperty('vendor')) {
        return (
          <SearchItem item={data[searchResults[key]]} product={true}/>
        );

      } else {
        return (
          <SearchItem item={data[searchResults[key]]} page={true}/>
        );
      }
    });
    return (
      <div className="search-results page-width">
        <h3 className="search-results__title">Search results for "{search}":</h3>
        {searchResultsItems}
      </div>
    );
  }
}