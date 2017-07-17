import React, {Component} from 'react';
import SocialNetworks from './SocialNetworks';

export default class Info extends Component {
  render(){
    const page = this.props.page;
    const socialNetworks = <SocialNetworks networks={page.social_networks}/>;
    let email,phone;
    if ( page.email !== '' )
      email = <div className="grid__item medium-up--one-third small--full-width">
        <div className="info-section__item">
          <h5 className="item__title">Email</h5>
          <a href={`mailto:${page.email}`} className="item__text">{page.email}</a>
        </div>
      </div>;
    if ( page.phone !== '' )
      phone = <div className="grid__item medium-up--one-third small--full-width">
        <div className="info-section__item">
          <h5 className="item__title">Phone</h5>
          <a href={`tel:${page.phone}`} className="item__text">{page.phone}</a>
        </div>
      </div>;
    return (
        <div className="info-section">
          <div className="grid">
            {email}
            {phone}
            {socialNetworks}
          </div>
        </div>
    );
  }
}