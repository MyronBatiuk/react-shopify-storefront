import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';
import Hero from './Hero';
import './home.css';
import Collection from '../collection/Collection';

export default class HomePage extends Component {

  componentWillMount(){
    helpers.getData('/pages/home', 'home');
  }
  render(){
    const homepage = this.props.homepage;
    let hero;
    if (Object.keys(homepage).length !== 0) {
      if ( homepage.hasOwnProperty('hero') ){
        hero = <Hero data={homepage.hero}/>
      }
    }
    return (
      <div className="home-page">
        {hero}
        <Collection {...this.props} template="home" />
      </div>
    );
  }
}