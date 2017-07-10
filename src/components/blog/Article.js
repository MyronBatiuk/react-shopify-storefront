import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Article extends Component {
  render(){
    const article = this.props.article;
    let image;
    if (article.hasOwnProperty('image'))
      image = <Link to={`/blog/${article.handle}`}>
        <img src={article.image} className="article__image" alt=""/>
      </Link>;
    return (
      <div className="article">
        <Link to={`/blog/${article.handle}`}>
          <h3 className="article__title">{article.title}</h3>
        </Link>
        <div className="article__info">
          <span className="article__author">by {article.author}</span>
          <span className="article__date">{article.published_at}</span>
        </div>
        {image}
        <div className="article__content">
          {article.excerpt}
        </div>
      </div>
    )
  }
}