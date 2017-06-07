import React, { Component } from 'react';

export default class Hero extends Component {
  render (){
    const imageUrl = this.props.image;
    const title = this.props.title;
    let image;
    if ( imageUrl !== '' ){
      const styles = {
        backgroundImage: 'url(' + imageUrl + ')'
      };
      image = <div className="collection-hero__image" style={styles}></div>;
    } else {
      image = <div className="collection-hero__image"></div>;
    }
    return (
      <div className="collection-hero">
        {image}
        <div className="collection-hero__title-wrapper">
          <h1 className="collection-hero__title page-width">{title}</h1>
        </div>
      </div>
    );
  }
}