import React, { Component } from 'react';
import DefaultHero from './assets/default_hero.png';

export default class Hero extends Component {

  render(){
    const hero = this.props.data;
    let heroImage,heroTitle,heroSubtitle;
    if ( hero.image !== '' ){
      heroImage = hero.image;
    }else {
      heroImage = DefaultHero;
    }
    const styles = {
      backgroundImage: 'url(' + heroImage + ')'
    };
    if ( hero.title !== '' ){
      heroTitle = <h1 className="inner__title">{hero.title}</h1>;
    }
    if ( hero.text !== '' ){
      heroSubtitle =  <p className="inner__subtitle">{hero.text}</p>;
    }
    return (
      <div className="hero-section">
        <div className="hero-section__image" style={styles}>
          <div className="hero-section__inner">
            {heroTitle}
            {heroSubtitle}
          </div>
        </div>


      </div>
    );
  }
}