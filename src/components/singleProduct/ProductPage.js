import React, {Component} from 'react';
import VariantSelector from './VariantSelector';
import Client from 'shopify-buy';

class ProductPage extends Component {
  //constructor(props) {
  //  super(props);
  //
  //  this.state = {};
  //
  //  this.handleOptionChange = this.handleOptionChange.bind(this);
  //  this.handleQuantityChange = this.handleQuantityChange.bind(this);
  //  this.findImage = this.findImage.bind(this);
  //}

  //componentWillMount() {
  //  this.props.product.options.forEach((selector) => {
  //    this.setState({
  //      selectedOptions: { [selector.attrs.name.value]: selector.attrs.values.value[0].value }
  //    });
  //  });
  //}

  //findImage(images, variantId) {
  //  const primary = images[0];
  //
  //  const image = images.filter(function (image) {
  //    return image.variant_ids.includes(variantId);
  //  })[0];
  //
  //  return (image || primary).src;
  //}

  //handleOptionChange(event) {
  //  const target = event.target;
  //  let selectedOptions = this.state.selectedOptions;
  //  selectedOptions[target.name] = target.value;
  //
  //  const selectedVariant = Client.Product.Helpers.variantForOptions(this.props.product.attrs, selectedOptions)
  //
  //  this.setState({
  //    selectedVariant: selectedVariant,
  //    selectedVariantImage: selectedVariant.image.src
  //  });
  //}
  //
  //handleQuantityChange(event) {
  //  this.setState({
  //    selectedVariantQuantity: event.target.value
  //  });
  //}

  render() {
    //let variantImage = this.state.selectedVariantImage || this.props.product.images[0].attrs.src.value;
    //let variant = this.state.selectedVariant || this.props.product.variants[0].attrs;
    //let variantQuantity = this.state.selectedVariantQuantity || 1;
    //let variantSelectors = this.props.product.options.map((option) => {
    //  return (
    //    <VariantSelector
    //      handleOptionChange={this.handleOptionChange}
    //      key={option.attrs.id.value.toString()}
    //      option={option.attrs}
    //      />
    //  );
    //});
    console.log(this.props.products);
    return (
      <div className="Product">
        <h5 className="Product__title"></h5>
        <span className="Product__price"></span>

        <label className="Product__option">
          Quantity
          <input min="1" type="number" defaultValue="1"></input>
        </label>
        <button className="Product__buy button">Add to Cart</button>
      </div>
    );
  }
}

export default ProductPage;
