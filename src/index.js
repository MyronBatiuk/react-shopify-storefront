//import React, { Component } from 'react';
//import { BrowserRouter } from 'react-router-dom'
//import Header from './components/header/Header';
//import Footer from './components/footer/Footer';
//import Routes from './components/Routes';
//import Cart from './components/cart/Cart';
////import Client, {Config} from 'shopify-buy';
//
//import { Provider } from 'react-redux';
//import store, { history } from './store';

//const config = new Config({
//  storefrontAccessToken: '220658e0dee403d784ffef24d20241cd',
//  domain: 'custom-storefront.myshopify.com'
//});
//
//const client = new Client(config);
//
//class App extends Component {
//  constructor() {
//    super();
//
//    this.state = {
//      isCartOpen: false,
//      cart: localStorage.getItem('cart')
//    }
//  }
//
//  openCart = () => {
//    this.setState({
//      isCartOpen: true
//    })
//  };
//
//  addVariantToCart = (variantId, quantity) => {
//    this.setState({
//      isCartOpen: true
//    });
//
//    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
//    const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8yNTQ4N2FmMTBhNzlhMGI5YmVlZjI5MmVkYzMwYWRjZT9rZXk9NDIxNTk3ZGJhMjhjMTdlMzUwOWFiNjFhM2VkMmU2NDA=';
//
//    return client.addLineItems(checkoutId, lineItemsToAdd).then(res => {
//      this.setState({
//        cart: JSON.stringify(res)
//      });
//      localStorage.setItem('cart', JSON.stringify(res));
//    });
//  };
//
//  handleCartClose = () => {
//    this.setState({
//      isCartOpen: false
//    });
//  };
//
//  updateQuantityInCart = (lineItemId, quantity) => {
//    const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8yNTQ4N2FmMTBhNzlhMGI5YmVlZjI5MmVkYzMwYWRjZT9rZXk9NDIxNTk3ZGJhMjhjMTdlMzUwOWFiNjFhM2VkMmU2NDA=';
//    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];
//
//    return client.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
//      this.setState({
//        cart: JSON.stringify(res)
//      });
//      localStorage.setItem('cart', JSON.stringify(res));
//    });
//  };
//
//  removeLineItemInCart = (lineItemId) => {
//    const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC8yNTQ4N2FmMTBhNzlhMGI5YmVlZjI5MmVkYzMwYWRjZT9rZXk9NDIxNTk3ZGJhMjhjMTdlMzUwOWFiNjFhM2VkMmU2NDA=';
//
//    return client.removeLineItems(checkoutId, [lineItemId]).then(res => {
//      this.setState({
//        cart: JSON.stringify(res)
//      });
//      localStorage.setItem('cart', JSON.stringify(res));
//    });
//  };
//
//  render() {
//    return (
//      <Provider store={store}>
//        <BrowserRouter history={history}>
//          <div id="main">
//            <Header openCart={this.openCart}/>
//            <Routes addVariantToCart={this.addVariantToCart}/>
//            <Footer/>
//            <Cart
//              cart={this.state.cart}
//              isCartOpen={this.state.isCartOpen}
//              handleCartClose={this.handleCartClose}
//              updateQuantityInCart={this.updateQuantityInCart}
//              removeLineItemInCart={this.removeLineItemInCart}
//              />
//          </div>
//        </BrowserRouter>
//      </Provider>
//    );
//  }
//}
//export default App;
import React from 'react';
import { render } from 'react-dom';
import './app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store, { history } from './store';
import ProductsGrid from './components/home/ProductsGrid';
import ProductPage from './components/singleProduct/ProductPage';
import App from './components/App';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App/>
    </BrowserRouter>
  </Provider>
)

render(
  router,
  document.getElementById('shopify-storefront')
);