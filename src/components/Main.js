import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Collection from './collection/Collection';
import Product from './product/Product';
import Page from './page/Page';
import NotFound from './404/NotFound';
import Cart from './cart/Cart';
import SearchResults from './search/SearchResults';
import Home from './home/Home';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div id="main">
        <Header header={this.props.header}
                history={this.props.history}
                location={this.props.location}/>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home homepage={this.props.homepage}
                      data={this.props.data}
                      location={this.props.location}
                      header={this.props.header}/> )}/>
          <Route path="/collections/:handle" render={(props) => (
            <Collection collection={this.props.collection}
                        location={this.props.location}
                        data={this.props.data}
                        header={this.props.header}/> )}/>
          <Route path="/products/:handle" render={(props) => (
            <Product product={this.props.product}
                     cart={this.props.cart}
                     location={this.props.location}
                     data={this.props.data}
                     header={this.props.header}/> )}/>
          <Route path="/search" render={(props) => (
            <SearchResults history={this.props.history}
                           data={this.props.data}
                           header={this.props.header}/> )}/>
          <Route path="/pages/:handle" render={(props) => (
            <Page page={this.props.page}
                  location={this.props.location}
                  header={this.props.header}/> )}/>
          <Route render={(props) => (
            <NotFound  header={this.props.header}/> )}/>
        </Switch>
        <Footer/>
        <Cart cart={this.props.cart}/>
      </div>
    )
  }
}