import React, {Component} from 'react';
import store from '../../store';
import * as actions from '../../actions/actionCreators';

class LineItem extends Component {

  decrementQuantity = () => {
    const operation = 'decrement';
    if ( this.props.line_item.quantity > 1 ) {
      store.dispatch(actions.updateQuantityInCart(this.props.id,operation));
    }
  };
  incrementQuantity = () => {
    const operation = 'increment';
    store.dispatch(actions.updateQuantityInCart(this.props.id,operation));
  };
  removeLineItemFromCart = () => {
    store.dispatch(actions.removeItemFromCart(this.props.id));
  };
  render() {
    let variant;
    if (this.props.line_item.option !== 'Title')
      variant = this.props.line_item.option + ' / ' + this.props.line_item.variant;
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.line_item.image ? <img src={this.props.line_item.image} alt={`${this.props.line_item.title} product shot`}/> : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {variant}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button className="Line-item__quantity-update" onClick={this.decrementQuantity}>-</button>
              <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
              <button className="Line-item__quantity-update" onClick={this.incrementQuantity}>+</button>
            </div>
            <span className="Line-item__price">
              {this.props.currency} { (this.props.line_item.quantity * this.props.line_item.price).toFixed(2) }
            </span>
            <button className="Line-item__remove" onClick={this.removeLineItemFromCart}>×</button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
