import React , {Component} from 'react';
import DefaultQuoteImage from './assets/default_quote_image.png';

export default class Quote extends Component {

  render (){
    const image = this.props.image;
    const text = this.props.text;
    let backgroundImage;
    if ( image !== '' ){
      backgroundImage = image;
    }else {
      backgroundImage = DefaultQuoteImage;
    }
    const styles = {
      backgroundImage: 'url(' + backgroundImage + ')'
    };
    return (
        <div className="quote-section">
          <div className="quote-section__image" style={styles}>
            <div className="quote-section__content">
              {text}
            </div>
          </div>
        </div>
    );
  }
}