import React , { Component } from 'react';
import Product from '../collection/Product';

export default class ProductsGrid extends Component {

  constructor() {
    super();

    this.state = {
      filteredProducts: [],
      filterType: '',
      filterValue: '',
      filterCollection: ''
    };
  }

  componentWillMount() {
    const data = this.props.data;
    const typeFilter = this.props.filters['types'];
    this.setState({
      filterType: 'type',
      filterValue: typeFilter['0']
    });
    let results = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (data[i].hasOwnProperty('vendor')) {
        if (data[i].type === typeFilter['0'])
          results.push(i);
      }
    }
    this.setState({
      filteredProducts: results
    });
  }

  componentWillUpdate(nextProps, nextState){
    const data = this.props.data;
    const newData = nextProps.data;
    let filterValue = this.state.filterValue;
    let filterType = this.state.filterType;
    let filterCollection = this.state.filterCollection;
    let filteredByCollection = false;
    let oldLength = Object.keys(data).length;
    let newLength = Object.keys(newData).length;
    let results = [];
    let newFilter = false;
    if ( filterValue !== nextState.filterValue) {
      this.setState({
        filteredProducts: []
      });
      oldLength = 0;
      newFilter = true;
      filterValue = nextState.filterValue;
      filterType = nextState.filterType;
    }
    if ( filterCollection !== nextState.filterCollection) {
      this.setState({
        filteredProducts: []
      });
      oldLength = 0;
      newFilter = true;
      filterCollection = nextState.filterCollection;
    }
    if ( oldLength !== newLength ) {
      for (let i = oldLength; i < newLength; i++) {
        let dataObject = newData[i];
        let collections = dataObject['collections'];
        if ( dataObject.hasOwnProperty('vendor') ) {
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
      if ( !newFilter )
        results = this.state.filteredProducts.concat(results);
      this.setState({
        filteredProducts: results
      });
    }
  }

  changeType = (type,value) => {
    this.setState({
      filterType: type,
      filterValue: value
    })
  };

  changeCollection = (event) => {
    this.setState({
      filterCollection: event.target.value
    })
  };

  render() {
    const data = this.props.data;
    const filteredProducts = this.state.filteredProducts;
    const filterValue = this.state.filterValue;
    const filters = this.props.filters;
    const typeFilters = filters['types'];
    const vendorFilters = filters['vendors'];
    const collectionFilters = filters['collections'];
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


    let collections = Object.keys(collectionFilters).map(key =>
        <option value={collectionFilters[key]}>{collectionFilters[key]}</option>
    );
    let products = Object.keys(filteredProducts).map(key =>
      <Product
        key={key}
        product={data[filteredProducts[key]]}
        />
    );

    return (
      <div className="products-grid page-width">
        <div className="products-filters">
          <ul className="types-and-vendors-filter">
            {types}
            {vendors}
          </ul>
          <select className="collections-filter" onChange={this.changeCollection}>
            <option value="">Search by state</option>
            {collections}
          </select>
        </div>
        <div className="grid grid--view-items">
          {products}
        </div>
      </div>
    );
  }
}