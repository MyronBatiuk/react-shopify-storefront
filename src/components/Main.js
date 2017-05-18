import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
//import ProductsConnector from './home/ProductsConnector';
//import ProductPage from './singleProduct/ProductPage';
//import About from './pages/About';
//import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    //const addVariantToCart = this.props.addVariantToCart;
    return (
      <div id="main">
        <Header/>
        <Switch>
          <Route exact path="/" component={ProductsGrid}/>
          <Route path="/products/:handle" component={ProductPage}></Route>
        </Switch>
        <Footer/>
      </div>
    )
  }
}