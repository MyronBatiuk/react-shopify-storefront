import React, {Component} from 'react';

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity.value - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity.value + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.line_item.variant.attrs.image ? <img src={this.props.line_item.variant.attrs.image.src} alt={`${this.props.line_item.title.value} product shot`}/> : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.attrs.title.value}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title.value}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id.value)}>-</button>
              <span className="Line-item__quantity">{this.props.line_item.quantity.value}</span>
              <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id.value)}>+</button>
            </div>
            <span className="Line-item__price">
              $ { (this.props.line_item.quantity.value * this.props.line_item.variant.attrs.price.value).toFixed(2) }
            </span>
            <button className="Line-item__remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id.value)}>×</button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
