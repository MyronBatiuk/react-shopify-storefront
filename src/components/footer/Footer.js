import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubmitImage from './assets/submit.svg';
import './footer.css';

export default class Footer extends Component {
  render(){
    return (
      <footer className="site-footer">
        <div className="site-footer__support-bar page-width">
          <div className="grid grid--table">
            <div className="grid__item large-up--seven-twelfths small--full-width">
              <div className="support-bar__subscribe">
                <h4 className="subscribe__title">Get updates on new products from 50 States Apparel</h4>
                <form method="POST" action="//50statesapparel.us11.list-manage.com/subscribe/post?u=66b8925bd0c9cf475febf2755&amp;id=a58814d25b" acceptCharset="UTF-8" id="subscribe" className="email-submit-form" target="_blank">
                  <button type="submit">Get Updates</button>
                  <div className="field">
                    <input type="email" name="EMAIL" placeholder="Email Address"/>
                  </div>
                </form>
              </div>
            </div>
            <div className="grid__item large-up--five-twelfths small--full-width">
              <div className="support-bar__submit">
                <Link to="/pages/submit">
                  <img src={SubmitImage} alt="Submit button"/>
                  <h4 className="submit__title">Submit a design for your state</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
