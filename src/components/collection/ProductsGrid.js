import React , { Component } from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';

export default class ProductsGrid extends Component {

  constructor(props) {
    super(props);

    const typeFilters = props.filters['types'];
    const vendorFilter = props.filters['vendors'];
    const search = props.search;
    let filterType, filterValue, collection = props.collection;
    if ( search && props.collection === '') {
      filterType = search.split('filter=')[1];
      filterType = filterType.split('&value')[0];
      filterValue = search.split('value=')[1];
      filterValue = decodeURIComponent(filterValue.split('&')[0]);
      collection = decodeURIComponent(search.split('state=')[1]);
    } else if ( Object.keys(typeFilters).length !== 0 ){
      filterType = 'type';
      filterValue = typeFilters['0'];
    } else {
      filterType = 'vendor';
      filterValue = vendorFilter['0'];
    }
    this.state = {
      filterType: filterType,
      filterValue: filterValue,
      filterCollection: collection
    };
  }

  componentWillUpdate(nextProps){
    if (nextProps.collection !== this.props.collection)
      this.setState({
        filterCollection: nextProps.collection
      });
  }

  changeType = (type,value) => {
    this.setState({
      filterType: type,
      filterValue: value
    });
    const collection = this.state.filterCollection !== '' ? `&state=${this.state.filterCollection}` : '';
    if (this.props.collection === '')
      history.replaceState({}, 'Filter change', `?filter=${type}&value=${value}${collection}`);
  };

  changeCollection = (event) => {
    this.setState({
      filterCollection: event.target.value
    });
    const collection = event.target.value !== '' ? `&state=${event.target.value}` : '';
    if (this.props.collection === '')
      history.replaceState({}, 'Filter change', `?filter=${this.state.filterType}&value=${this.state.filterValue}${collection}`);
  };

  render() {
    const {data, filters, collection} = this.props;
    const {filterValue, filterType, filterCollection} = this.state;
    const typeFilters = filters['types'];
    const vendorFilters = filters['vendors'];
    const collectionFilters = filters['collections'];
    let collectionFilter;
    let types = Object.keys(typeFilters).map(key => {
      if ( filterValue === typeFilters[key] ) {
        return (
          <li className="active" onClick={() => this.changeType('type',typeFilters[key])}>{typeFilters[key]}</li>
        )
      } else {
        return (
          <li onClick={() => this.changeType('type',typeFilters[key])}>{typeFilters[key]}</li>
        )
      }
    }
    );
    let vendors = Object.keys(vendorFilters).map(key => {
      if ( filterValue === vendorFilters[key] ) {
        return (
          <li className="active" onClick={() => this.changeType('vendor',vendorFilters[key])}>{vendorFilters[key]}</li>
        )
      } else {
        return (
          <li onClick={() => this.changeType('vendor',vendorFilters[key])}>{vendorFilters[key]}</li>
        )
      }
    });
    if (collection === '') {
      let collections = Object.keys(collectionFilters).map(key => {
        if (filterCollection === collectionFilters[key]) {
          return <option selected value={collectionFilters[key]}>{collectionFilters[key]}</option>;
        } else {
          return <option value={collectionFilters[key]}>{collectionFilters[key]}</option>;
        }
      }
      );
      collectionFilter = <select className="collections-filter" onChange={this.changeCollection}>
        <option value="">Search by state</option>
        {collections}
      </select>;
    } else {
      collectionFilter = <div className="collection-title">
        {collection}
        <Link to="/">
          <svg aria-hidden="true" focusable="false" role="presentation" className="icon-close" viewBox="0 0 37 40"><path d="M21.3 23l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-11 11-11-11c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11-11 11c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l11-11 11 11c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-11-11z"></path></svg>
        </Link>
      </div>;
    }

    let results = [];
    let filteredByCollection = false;
    for (let i = 0; i < Object.keys(data).length; i++) {
      let dataObject = data[i];
      let collections = dataObject['collections'];
      if (dataObject.hasOwnProperty('vendor')) {
        if ( filterCollection !== '' ) {
          for( let j=0; j < Object.keys(collections).length; j++ ) {
            if ( collections[j].title === filterCollection )
              filteredByCollection = true;
          }
        } else {
          filteredByCollection = true;
        }

        if ( dataObject[filterType] === filterValue && filteredByCollection )
          results.push(i);
        filteredByCollection = false;
      }
    }
    let products = Object.keys(results).map(key =>
      <Product
        key={key}
        product={data[results[key]]}
        />
    );
    if (Object.keys(results).length === 0)
      products = <h2 className="no-results-title">No products found</h2>;
    return (
      <div className="products-grid page-width">
        <div className="products-filters">
          <ul className="types-and-vendors-filter">
            {types}
            {vendors}
          </ul>
          {collectionFilter}
        </div>
        <div className="grid grid--view-items">
          {products}
        </div>
      </div>
    );
  }
}