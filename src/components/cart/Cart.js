import React, {Component} from 'react';
import LineItem from './LineItem';

class Cart extends Component {

  render() {
    const cartObject = JSON.parse(this.props.cart);
    let cart,line_items = "Cart is empty",subtotal = 0 ,tax = 0 ,total = 0;
    if ( cartObject !== null ) {
      cart = cartObject.attrs;
      subtotal = cart.subtotalPrice.value;
      tax = cart.totalTax.value;
      total = cart.totalPrice.value;
      line_items = cart.lineItems.map((line_item) => {
        return (
          <LineItem
            updateQuantityInCart={this.props.updateQuantityInCart}
            removeLineItemInCart={this.props.removeLineItemInCart}
            key={line_item.attrs.id.value.toString()}
            line_item={line_item.attrs}
            />
        );
      });
    }

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            ?
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {subtotal}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {tax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {total}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={() => this.openCheckout(cart.webUrl.value)}>Checkout</button>
        </footer>
      </div>
    )
  }

  openCheckout = (url) =>{
    localStorage.removeItem('cart');
    window.open(url);
  };
}

export default Cart;
