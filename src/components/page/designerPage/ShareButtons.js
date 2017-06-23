import React, {Component} from 'react';

export default class ShareButtons extends Component {

  render(){
    const page = this.props.page;
    const designer = page.designer;
    const url = location.protocol + '//' + location.host + '/pages/' + page.slug;
    return (
      <div className="share-buttons">
        <a target="_blank" href={`//twitter.com/share?url=${url}`} className="share-button">
        </a>
        <a target="_blank" href={`//www.facebook.com/sharer.php?u=${url}`} className="share-button facebook">
        </a>
        <a target="_blank" href={`//pinterest.com/pin/create/button/?url=${url}&media=${designer.image}&description=${page.title}`} className="share-button pinterest">
        </a>
      </div>
    )
  }
}