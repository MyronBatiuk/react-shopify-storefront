import React, {Component} from 'react';
import Hero from './Hero';
import Info from './Info';
import Form from './Form';
import './contact.css';

export default class ContactPage extends Component {

  render() {
    const page = this.props.page;
    const hero = <Hero page={page}/>;
    const info = <Info page={page}/>;
    const form = <Form page={page}/>;
    return (
        <div className="contact-page">
          {hero}
          <div className="contact-page__content page-width">
            {info}
            {form}
          </div>
        </div>
    );
  }
}