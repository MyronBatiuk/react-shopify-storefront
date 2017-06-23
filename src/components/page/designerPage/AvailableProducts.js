import React , {Component} from 'react';
import AvailableProduct from './AvailableProduct';

export default class AvailableProducts extends Component {

  render() {
    const data = this.props.data;
    const designer = this.props.designer;
    let relatedItems, totalNumber = 0;
    relatedItems = Object.keys(data).map(key => {
      if (totalNumber < 4 && data[key].hasOwnProperty('vendor') && data[key].designer_title === designer ) {
        totalNumber++;
        return (
          <AvailableProduct key={key} item={data[key]}/>
        )
      } else {
        return null;
      }
    });
    return (
      <div className="related-items">
        <h3 className="related-items__title">Products available</h3>
        <div className="related-items__content">
          <div className="grid">
            {relatedItems}
          </div>
        </div>
      </div>
    );

  }
}