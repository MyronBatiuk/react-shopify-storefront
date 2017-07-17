import React, {Component} from 'react';

export default class SocialNetworks extends Component {

  render() {
    const networks = this.props.networks;
    let socialNetworks = Object.keys(networks).map(key => {
      if (networks[key] !== '') {
        return (
            <a key={key} href={networks[key]} target="_blank" rel="noopener noreferrer"
               className={`share-button ${key}`}>
            </a>
        )
      } else {
        return null;
      }
    });
    return (
        <div className="grid__item medium-up--one-third small--full-width">
          <div className="info-section__item share-buttons">
            <h5 className="item__title social">Social</h5>
            {socialNetworks}
          </div>
        </div>
    )
  }
}