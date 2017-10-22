import React, {Component} from 'react';
import '../app.scss';
import Icon from '../assets/fb-icon.png';

export default class FacebookMessanger extends Component {
  render() {
    return (
        <a className="facebook-messenger" href="http://m.me/1011178508893471" target="_blank">
          <img src={Icon} alt="Facebook Messenger"/>
        </a>
    );
  }
}