import React, {Component} from 'react';
import * as helpers from '../../helpers/helpers';
import DefaultPage from './defaultPage/DefaultPage';
import DesignerPage from './designerPage/DesignerPage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';
import SubmitDesignPage from './submitDesignPage/SubmitDesignPage';

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

  componentDidUpdate(nextProps) {
    if (Object.keys(this.props.page).length !== 0 && Object.keys(this.props.header).length !== 0 && this.props.location.pathname === nextProps.location.pathname) {
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
      } else if (page.hasOwnProperty('box1_image')) {
        content = <AboutPage page={page}/>;
      } else if (page.hasOwnProperty('email')) {
        content = <ContactPage page={page}/>;
      } else if (page.hasOwnProperty('row3_title')) {
        content = <SubmitDesignPage page={page}/>;
      } else {
        content = <DefaultPage page={page}/>;
      }
    }
    return (
        <div className="page-template">
          {content}
        </div>
    );
  }
};