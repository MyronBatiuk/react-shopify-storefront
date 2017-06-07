import React, {Component} from 'react';
import store from '../../store.js';
import * as actions from '../../actions/actionCreators';

class VariantSelector extends Component {

  logChange = (e) => {
    let variantId = e.target.value;
    let variantPrice = this.props.variants[variantId].price;
    let variantComparePrice = this.props.variants[variantId].compare_at_price;
    store.dispatch(actions.changeSelectedVariant(variantId, variantPrice, variantComparePrice));
  };

  render() {
    let variants = this.props.variants;
    let options = Object.keys(variants).map(id =>
        <option
          value={variants[id].id}
          key={variants[id].id}>
          {variants[id].title}
        </option>
    );
    return (
      <select className="product__variants" onChange={this.logChange}>
        {options}
      </select>
    );
  }
}

export default VariantSelector;
