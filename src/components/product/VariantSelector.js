import React, {Component} from 'react';
import store from '../../store.js';
import * as actions from '../../actions/actionCreators';

class VariantSelector extends Component {

  logChange = (e) => {
    const variantId = e.target.value;
    const variant = this.props.variants[variantId];
    store.dispatch(actions.changeFeaturedImage(variant.image_url));
    store.dispatch(actions.changeSelectedVariant(variantId, variant.price, variant.compare_at_price));
  };

  render() {
    const {variants, selected} = this.props;
    const options = Object.keys(variants).map(id => {
          if (selected === parseInt(variants[id].id, 10)) {
            return (
                <option
                    selected
                    value={variants[id].id}
                    key={variants[id].id}>
                  {variants[id].title}
                </option>
            );
          } else {
            return (
                <option
                    value={variants[id].id}
                    key={variants[id].id}>
                  {variants[id].title}
                </option>
            );
          }

        },
    );
    return (
        <select className="product__variants" onChange={this.logChange}>
          {options}
        </select>
    );
  }
}

export default VariantSelector;
