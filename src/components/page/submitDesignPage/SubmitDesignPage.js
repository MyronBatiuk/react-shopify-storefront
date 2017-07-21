import React, {Component} from 'react';
import Hero from './Hero';
import Info from './Info';
import Form from './Form';
import Content from './Content';
import './submit.css';

export default class SubmitDesignPage extends Component {

  render() {
    const page = this.props.page;
    const hero = <Hero page={page}/>;
    const info = <Info page={page}/>;
    const form = <Form page={page}/>;
    const content = <Content page={page}/>;
    return (
        <div className="submit-design-page">
          {hero}
          <div className="submit-design-page__content page-width">
            {info}
            {content}
            {form}
          </div>
        </div>
    );
  }
}