import React, {Component} from 'react';
import Hero from './Hero';
import Box from './Box';
import Quote from './Quote';
import './about.css';

export default class AboutPage extends Component {

  render() {
    const page = this.props.page;
    const hero = <Hero page={page}/>;
    let quote;
    if (page.quote_text !== '')
      quote = <Quote image={page.quote_image} text={page.quote_text}/>;

    const boxesArray = [1,2,3,4];
    const boxes = boxesArray.map(key => {
      let image = 'box'+ key + '_image';
      let title = 'box'+ key + '_title';
      let text = 'box'+ key + '_text';
      if ( page[image] !== '' ) {
        return (
            <Box key={key} image={page[image]} title={page[title]} text={page[text]}/>
        );
      } else {
        return null;
      }
    });

    return (
      <div className="about-page">
        {hero}
        <div className="about-page__content page-width">
          {quote}
          <div className="boxes-section">
            {boxes}
          </div>
        </div>
      </div>
    );
  }
}