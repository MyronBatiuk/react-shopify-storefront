import React, {Component} from 'react';
import store from '../../store';
import * as actions from '../../actions/actionCreators';

class LineItem extends Component {
  updateQuantity = (e) => {
    let quantity = parseInt(e.target.value,10);
    if ( quantity > 0 )
      store.dispatch(actions.updateQuantityInCart(this.props.id,quantity));
  };
  removeLineItemFromCart = () => {
    store.dispatch(actions.removeItemFromCart(this.props.id));
  };
  render() {
    let variant;
    if (this.props.line_item.option !== 'Title')
      variant = this.props.line_item.option + ': ' + this.props.line_item.variant;
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.line_item.image ? <img src={this.props.line_item.image} alt={`${this.props.line_item.title} product shot`}/> : null}
        </div>
        <div className="Line-item__content">
            <h5 className="Line-item__title">
              {this.props.line_item.title}
            </h5>
            <span className="Line-item__price">
              {this.props.currency + (this.props.line_item.quantity * this.props.line_item.price).toFixed(2) }
            </span>
            <div className="Line-item__variant-title">
              {variant}
            </div>
            <div className="Line-item__quantity-container">
              <span className="Line-item__quantity-title">Qty:</span>
              <input className="Line-item__quantity" onChange={this.updateQuantity} value={this.props.line_item.quantity}/>
            </div>
            <button className="Line-item__remove" onClick={this.removeLineItemFromCart}>×</button>
        </div>
      </li>
    );
  }
}

export default LineItem;
