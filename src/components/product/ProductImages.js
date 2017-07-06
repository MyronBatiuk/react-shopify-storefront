import React, { Component } from 'react';
import * as actions from '../../actions/actionCreators';
import store from '../../store';

export default class ProductImages extends Component {

  changeFeaturedImage = (image) => {
    store.dispatch(actions.changeFeaturedImage(image));
  };

  render(){
    const images = this.props.images;
    let imagesList = Object.keys(images).map(key => {
      return (
          <li className="product-images__item" key={key} onClick={() => this.changeFeaturedImage(images[key])}>
            <img src={images[key]} alt=""/>
          </li>
      )
    });
    return (
        <ul className="product-images">
          {imagesList}
        </ul>
    )
  }
}