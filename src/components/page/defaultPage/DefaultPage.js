import React, {Component} from 'react';
import './defaultPage.css';


export default class DefaultPage extends Component {

  render() {
    const page = this.props.page;
    return (
        <div className="default-page page-width">
          <h1 className="default-page__title">{page.title}</h1>
          <div className="default-page__content" dangerouslySetInnerHTML={{__html: page.content}}></div>
        </div>
    );
  }
}