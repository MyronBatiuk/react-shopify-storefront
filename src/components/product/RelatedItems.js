import React, {Component} from 'react';
import RelatedItem from './RelatedItem';

export default class RelatedItems extends Component {

  render() {
    const data = this.props.data;
    const slug = this.props.slug;
    const title = this.props.title;
    let relatedItems, totalNumber = 0;
    relatedItems = Object.keys(data).map(key => {
      if (totalNumber < 4 && data[key].hasOwnProperty('vendor') && data[key].title === title && data[key].hasOwnProperty('group') && data[key].slug !== slug) {
        totalNumber++;
        return (
          <RelatedItem key={key} item={data[key]}/>
        )
      } else {
        return null;
      }
    });
    if (totalNumber !== 0) {
      return (
        <div className="product__related-items">
          <h3 className="related-items__title">Related Items</h3>

          <div className="related-items__content">
            <div className="grid">
              {relatedItems}
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}