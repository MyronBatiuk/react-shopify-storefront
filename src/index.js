import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import * as helpers from './helpers/helpers';

class Router extends Component {
  componentDidMount(){
    helpers.hideLoadingIndicator();
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}


ReactDOM.render(
  <Router/>,
  document.getElementById('shopify-storefront')
);