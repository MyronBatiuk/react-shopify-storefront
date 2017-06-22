import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    const collection = this.props.collection;
    let image;
    if (collection.image !== '') {
      image = <img className="collection-hero__image" src={collection.image} alt=""/>;
    }
    return (
      <div className="collection-hero">
        <div className="collection-hero__content page-width">
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title">{collection.title}</h1>
            <p className="collection-hero__description">{collection.description}</p>
          </div>
          {image}
        </div>
      </div>
    );
  }
}