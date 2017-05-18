import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    return (
      <select
        className="Product__option"
        name={this.props.option.name.value}
        key={this.props.option.name.value}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.value.map((value) => {
          return (
            <option value={value.value} key={`${this.props.option.name.value}-${value.value}`}>{`${value.value}`}</option>
          )
        })}
      </select>
    );
  }
}

export default VariantSelector;
