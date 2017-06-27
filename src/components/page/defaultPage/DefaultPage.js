import React, {Component} from 'react';

export default class DefaultPage extends Component {


  render() {
    const page = this.props.page;
    return (
      <div>
        <h1 className="page__title">{page.title}</h1>
        <div className="page__content" dangerouslySetInnerHTML={{__html: page.content}}></div>
      </div>
    );
  }
}