import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';
import Hero from './Hero';
import './home.css';
import Collection from '../collection/Collection';

export default class HomePage extends Component {

  componentWillMount(){
    helpers.showLoadingIndicator();
    helpers.getData('/pages/home', 'home');
  }

  componentDidUpdate(){
    if ( Object.keys(this.props.homepage).length !== 0 && Object.keys(this.props.collection).length !== 0 && Object.keys(this.props.header).length !== 0 ) {
      helpers.hideLoadingIndicator();
    }
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