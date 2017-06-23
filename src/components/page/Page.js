import React, { Component } from 'react';
import * as helpers from '../../helpers/helpers';
import DefaultPage from './defaultPage/DefaultPage';
import DesignerPage from './designerPage/DesignerPage';
import './page.css';

export default class Page extends Component {
  componentWillMount() {
    helpers.showLoadingIndicator();
    let page = this.props.location.pathname;
    helpers.getData(page, 'page');
  }

  componentWillReceiveProps(nextProps) {
    let newPage = nextProps.location.pathname;
    let currentPage = this.props.location.pathname;
    if (newPage !== currentPage) {
      helpers.showLoadingIndicator();
      helpers.getData(newPage, 'page');
    }
  }

  componentDidUpdate() {
    if (Object.keys(this.props.page).length !== 0 && Object.keys(this.props.header).length !== 0) {
      helpers.hideLoadingIndicator();
      helpers.changeSeo(this.props.page, this.props.header.shop_name);
    }
  }

  render() {
    const page = this.props.page;
    const data = this.props.data;
    let content;
    if (Object.keys(page).length !== 0) {
      if (page.hasOwnProperty('designer')) {
        content = <DesignerPage page={page} data={data}/>;
      } else {
        content = <DefaultPage page={page}/>;
      }
    }
    return (
      <div className="page-template page-width">
        {content}
      </div>
    );
  }
};