import React, { Component } from 'react';
import Article from './Article';
import Pagination from './Pagination';
import * as helpers from '../../helpers/helpers';
import './blog.css';

export default class Blog extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    const location = this.props.location.pathname;
    const queryString = this.props.location.search;
    helpers.getData(location.replace('blog', 'blogs') + queryString, 'blog');
  }
  componentWillReceiveProps(nextProps){
    let newLocation = nextProps.location.pathname;
    let newPage = nextProps.location.search;
    if ( newPage !== this.props.location.search ){
      helpers.showLoadingIndicator();
      if (newPage === '')
        helpers.getData(newLocation.replace('blog','blogs'), 'blog');
    }
    if ( newLocation !== this.props.location.pathname) {
      helpers.showLoadingIndicator();
      helpers.getData(newLocation.replace('blog','blogs'), 'blog');
    }
  }

  componentDidUpdate(prevProps){
    if ( Object.keys(this.props.header).length !== 0 && Object.keys(this.props.blog).length !== 0 && prevProps.location.search === this.props.location.search) {
      helpers.changeSeo('', this.props.header.shop_name, this.props.blog.title + ' Blog', this.props.blog.title);
      helpers.hideLoadingIndicator();
    }
  }
  render(){
    const blog = this.props.blog;
    const articles = blog.articles;
    let listOfArticles,pagination,title;
    const queryString = this.props.location.search;
    let currentPage = queryString.split('page=')[1];
    if (typeof currentPage === 'undefined')
      currentPage = 1;
    if ( Object.keys(blog).length !== 0 ){
      title = <h1 className="blog-template__title">{blog.title}</h1>;
      listOfArticles = Object.keys(articles).map(key => (
          <Article key={key} article={articles[key]}/>
      ));
      if (blog.pages > 1) {
        pagination = <Pagination
            pages={blog.pages}
            currentPage={currentPage}
            url={this.props.location.pathname}
        />;
      }
    }
    return (
        <div className="blog-template">
          {title}
          <div className="blog-template__articles page-width">
            {listOfArticles}
            {pagination}
          </div>
        </div>
    )
  }
}