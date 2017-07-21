import React, {Component} from 'react';
import Box1Image from './assets/design.svg';
import Box2Image from './assets/how.svg';
import Box3Image from './assets/compensation.svg';


export default class Info extends Component {
  render() {
    const page = this.props.page;
    return (
        <div className="info-section">
          <div className="grid">
            <div className="grid__item medium-up--one-third small--full-width">
              <div className="info-section__wrapper">
                <img src={Box1Image} className="info-section__image" alt=""/>
                <div className="info-section__text">
                  <h5 className="item__title">{page.box1_title}</h5>
                  <p className="item__text" dangerouslySetInnerHTML={{__html: page.box1_text}}/>
                </div>
              </div>
            </div>
            <div className="grid__item medium-up--one-third small--full-width">
              <div className="info-section__wrapper">
                <img src={Box2Image} className="info-section__image" alt=""/>
                <div className="info-section__text">
                  <h5 className="item__title">{page.box2_title}</h5>
                  <p className="item__text" dangerouslySetInnerHTML={{__html: page.box2_text}}/>
                </div>
              </div>
            </div>
            <div className="grid__item medium-up--one-third small--full-width">
              <div className="info-section__wrapper">
                <img src={Box3Image} className="info-section__image" alt=""/>
                <div className="info-section__text">
                  <h5 className="item__title">{page.box3_title}</h5>
                  <p className="item__text" dangerouslySetInnerHTML={{__html: page.box3_text}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}