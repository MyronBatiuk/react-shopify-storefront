import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Designer extends Component {

  render() {
    const designer = this.props.designer;
    let image,excerpt;
    if (designer.image !== '') {
      const styles = {
        backgroundImage: 'url(' + designer.image + ')'
      };
      image = <div className="header__image" style={styles}></div>;
    }
    if (designer.excerpt !== '')
      excerpt = <div className="designer__excerpt">{designer.excerpt}</div>;
    return (
      <div className="product__designer">
        <div className="designer__header">
          <Link to={designer.page_url}>{image}</Link>
          <div className="header__title">
            <Link to={designer.page_url}><h5 className="placeholder">Designer</h5></Link>
            <Link to={designer.page_url}><h3 className="designer-name">{designer.title}</h3></Link>
          </div>
          <Link to={designer.page_url}><span className="profile">See Profile</span></Link>
        </div>
        {excerpt}
      </div>
    )
  }
}