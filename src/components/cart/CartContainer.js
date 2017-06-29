import React ,{Component} from 'react';
import store from '../../store';
import * as actions from '../../actions/actionCreators';
import * as helpers from '../../helpers/helpers';
import LineItem from './LineItem';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class CartContainer extends Component {

  handleClickOutside = evt => {
    this.closeCart();
  };

  openCheckout = (url) => {
    localStorage.removeItem('cart');
    window.location = url;
  };

  closeCart = () => {
    store.dispatch(actions.closeCart());
  };

  render() {
    const cart = this.props.cart;
    const cartStatus = this.props.cartStatus;
    let line_items = "Cart is empty", subtotal = 0;
    let line_items_number = Object.keys(cart.items).length;
    let checkoutUrl = helpers.shopifyStoreUrl + '/cart/';
    if (line_items_number !== 0) {
      line_items = Object.keys(cart.items).map((line_item) => {
        subtotal += cart.items[line_item].quantity * cart.items[line_item].price;
        checkoutUrl += line_item + ':' + cart.items[line_item].quantity + ',';
        return (
          <LineItem
            key={line_item}
            id={line_item}
            line_item={cart.items[line_item]}
            currency={cart.currency}
            />
        );
      });
    }
    return (
      <div className={`Cart ${cartStatus ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <i onClick={this.closeCart} className="fa fa-long-arrow-left" aria-hidden="true"></i>
          <h5 onClick={this.closeCart}>Continue Shopping</h5>
          <svg className="Cart__icon">
            <g>
              <path className="st0" d="M10.2,16.5c0.1,0.4,0.2,0.8,0.3,1.1c0.1,0.4,0.4,0.6,0.8,0.6c0.1,0,0.2,0,0.3,0c4.8,0,9.6,0,14.4,0c0.1,0,0.2,0,0.4,0c0.3,0,0.5,0.3,0.5,0.6c0,0.3-0.2,0.6-0.5,0.6c-0.1,0-0.2,0-0.3,0c-4.8,0-9.6,0-14.4,0c-0.5,0-1,0-1.4-0.3c-0.6-0.4-0.9-0.9-1-1.6C8.3,13.5,7.4,9.4,6.4,5.2C6.3,4.8,6.2,4.4,6.1,4C6,3.8,5.9,3.6,5.8,3.4C5.6,3,5.2,2.8,4.7,2.8c-0.9,0-1.7,0-2.6,0C1.7,2.8,1.4,2.5,1.5,2c0.1-0.3,0.3-0.5,0.6-0.5c0.9,0,1.8,0,2.6,0c0.3,0,0.6,0.1,0.9,0.2c0.7,0.3,1.1,0.9,1.4,1.5c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2,0.1,0.2,0.3,0.2c0.1,0,0.1,0,0.2,0c5.7,0,11.5,0,17.2,0c1.4,0,2.4,1,2.4,2.4c0,1.4,0,2.7,0,4.1c0,0.7-0.1,1.3-0.4,1.8c-0.5,0.8-1.2,1.2-2.1,1.3c-3.6,0.7-7.2,1.4-10.8,2c-1.2,0.2-2.5,0.5-3.7,0.7C10.4,16.5,10.3,16.5,10.2,16.5z M10,15.3c0.1,0,0.3,0,0.4-0.1c2.7-0.5,5.3-1,8-1.5c2.2-0.4,4.4-0.8,6.6-1.3c0.9-0.2,1.3-0.8,1.3-1.6c0-1.5,0-2.9,0-4.4c0-0.7-0.4-1.2-1.2-1.2c-5.7,0-11.4,0-17.1,0c-0.1,0-0.2,0-0.2,0C8.5,8.6,9.2,12,10,15.3z"/>
              <path className="st0" d="M26.5,22.9c0,1.5-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.3-2.8-2.8c0-1.5,1.3-2.8,2.8-2.8C25.3,20.1,26.5,21.4,26.5,22.9z M23.7,21.4c-0.9,0-1.5,0.7-1.5,1.5c0,0.9,0.7,1.5,1.6,1.5c0.8,0,1.5-0.7,1.5-1.6C25.3,22,24.6,21.4,23.7,21.4z"/>
              <path className="st0" d="M12,25.7c-1.6,0-2.8-1.3-2.8-2.8c0-1.5,1.3-2.8,2.8-2.7c1.5,0,2.8,1.3,2.8,2.8C14.8,24.4,13.5,25.7,12,25.7z M13.5,22.9c0-0.9-0.7-1.5-1.5-1.5c-0.9,0-1.6,0.7-1.5,1.6c0,0.8,0.7,1.5,1.6,1.5C12.9,24.4,13.5,23.7,13.5,22.9z"/>
            </g>
          </svg>
        </header>
        <div className="Cart__content">
          <ul className="Cart__line-items">
            {line_items}
          </ul>
          <div className="Cart-subtotal">
            <div className="Cart-subtotal__title">Sub-total:</div>
            <div className="Cart-subtotal__amount">
              <span className="amount">{cart.currency + subtotal}</span>
            </div>
          </div>
          <button className="Cart__checkout-button" onClick={() => this.openCheckout(checkoutUrl)}>Proceed to checkout</button>
          <p className="add-info">Shipping & taxes are calculated at checkout</p>
        </div>
        <footer className="Cart__footer">
          <Link className="Cart__footer-link" to="/pages/shipping-policy" onClick={this.closeCart}>Shipping policy</Link>
          <span className="Cart__footer-devider">|</span>
          <Link className="Cart__footer-link" to="/pages/return-policy" onClick={this.closeCart}>Return policy</Link>
        </footer>
      </div>
    )
  }
}
export default onClickOutside(CartContainer);