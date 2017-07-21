import React, { Component } from 'react';
import DefaultHero from './assets/default_hero.jpg';

export default class Hero extends Component {

  render(){
    const page = this.props.page;
    let heroImage,heroTitle,heroSubtitle;
    if ( page.hero_image !== '' ){
      heroImage = page.hero_image;
    }else {
      heroImage = DefaultHero;
    }
    const styles = {
      backgroundImage: 'url(' + heroImage + ')'
    };
    if ( page.title !== '' ){
      heroTitle = <h1 className="inner__title">{page.title}</h1>;
    }
    if ( page.subtitle !== '' ){
      heroSubtitle =  <p className="inner__subtitle">{page.subtitle}</p>;
    }
    return (
      <div className="hero-section">
        <div className="hero-section__image align-bottom" style={styles}>
          <div className="hero-section__inner">
            {heroTitle}
            {heroSubtitle}
          </div>
        </div>
      </div>
    );
  }
}