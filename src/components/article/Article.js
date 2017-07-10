import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';
import './article.css';

export default class Article extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    const location = this.props.location.pathname;
    const queryString = this.props.location.search;
    helpers.getData(location.replace('blog', 'blogs') + queryString, 'article');
  }
  componentWillReceiveProps(nextProps){
    let newLocation = nextProps.location.pathname;
    let newPage = nextProps.location.search;
    if ( newLocation !== this.props.location.pathname) {
      helpers.showLoadingIndicator();
      helpers.getData(newLocation.replace('blog','blogs'), 'article');
    }
    if ( newPage !== this.props.location.search ){
      helpers.showLoadingIndicator();
    }
  }

  componentDidUpdate(prevProps){
    if ( Object.keys(this.props.header).length !== 0 && Object.keys(this.props.article).length !== 0 && prevProps.location.search === this.props.location.search) {
      helpers.changeSeo(this.props.article, this.props.header.shop_name , this.props.header.shop_description);
      helpers.hideLoadingIndicator();
    }
  }
  render(){
    const article = this.props.article;
    let title,author,date,content;
    if ( Object.keys(article).length !== 0 ) {
      title = article.title;
      author = article.author;
      date = article.published_at;
      content = <div className="single-article__content" dangerouslySetInnerHTML={{__html: article.content}}></div>;
    }
    return (
      <div className="single-article page-width">
        <h3 className="single-article__title">{title}</h3>
        <div className="single-article__info">
          <span className="single-article__author">by {author}</span>
          <span className="single-article__date">{date}</span>
        </div>
        {content}
      </div>
    )
  }
}