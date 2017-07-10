import React , {Component} from 'react';

export default class Box extends Component {

  render (){
    const image = this.props.image;
    const title = this.props.title;
    const text = this.props.text;
    const styles = {
      backgroundImage: 'url(' + image + ')'
    };
    return (
        <div className="box">
          <div className="box__header" style={styles}>
            <h5 className="box__title">
              {title}
            </h5>
          </div>
          <div className="box__content">
            {text}
          </div>
        </div>
    );
  }
}