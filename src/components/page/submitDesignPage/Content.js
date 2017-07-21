import React,{Component} from 'react';

export default class Content extends Component {
  render(){
    const page = this.props.page;
    return (
        <div className="content-section">
          <h3 className="content-section__title">{page.box4_title}</h3>
          <p className="content-section__text">{page.box4_text}</p>
        </div>
    )
  }
}