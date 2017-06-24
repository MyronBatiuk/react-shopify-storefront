import React, {Component} from 'react';
import NoImage from './assets/no-image.gif';
import SocialNetworks from './SocialNetworks';
import AvailableProducts from './AvailableProducts';
import './designerPage.css';

export default class DesignerPage extends Component {

  render() {
    const page = this.props.page;
    const data = this.props.data;
    const designer = page.designer;
    const websites = designer.websites;
    const socialNetworks = <SocialNetworks networks={designer.social_networks}/>;
    let image,websitesUrl;
    if(designer.image !== ''){
      image = <img className="designer-page__image" src={designer.image} alt=""/>;
    } else {
      image = <img className="designer-page__image" src={NoImage} alt=""/>;
    }
    websitesUrl = Object.keys(websites).map(key => {
      if (websites[key] !== ''){
        return (
          <a key={key} className="websites__item" target="_blank" href={websites[key]}>{websites[key]}</a>
        )
      } else {
        return null;
      }
    });
    return (
      <div className="designer-page">
        <div className="grid designer-page__content">
          <div className="grid__item medium-up--five-twelfths small--full-width">
            {image}
          </div>
          <div className="grid__item medium-up--seven-twelfths small--full-width">
            <h1 className="designer-page__title">{page.title}</h1>
            <p className="designer-page__text" dangerouslySetInnerHTML={{__html: page.content}}></p>
            <div className="designer-page__wrapper">
              <div className="designer-page__websites">
                {websitesUrl}
              </div>
              {socialNetworks}
            </div>
          </div>
        </div>
        <AvailableProducts data={data} designer={page.title}/>
      </div>
    );
  }
}