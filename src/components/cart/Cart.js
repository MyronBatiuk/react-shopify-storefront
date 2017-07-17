import React, {Component} from 'react';
import CartContainer from './CartContainer';
import store from '../../store';
import * as actions from '../../actions/actionCreators';
import './cart.css';

export default class Cart extends Component {
  closeCart = () => {
    store.dispatch(actions.closeCart());
  };
  render() {
    const cart = this.props.cart;
    let cartStatus = cart.open;
    return (
      <div className="Cart-wrapper">
        <div className={`Modal-background ${cartStatus ? 'open' : ''}`} onClick={this.closeCart}>
        </div>
        <CartContainer cart={cart} cartStatus={cartStatus} closeCart={this.closeCart}/>
      </div>
    )
  }
}