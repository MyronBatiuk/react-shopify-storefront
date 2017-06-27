import React, {Component} from 'react';
import CartContainer from './CartContainer';
import './cart.css';

export default class Cart extends Component {
  render() {
    const cart = this.props.cart;
    let cartStatus = cart.open;
    return (
      <div className="Cart-wrapper">
        <div className={`Modal-background ${cartStatus ? 'open' : ''}`}>
        </div>
        <CartContainer cart={cart} cartStatus={cartStatus}/>
      </div>
    )
  }
}