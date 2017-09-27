import React ,{Component} from 'react';
import onClickOutside from 'react-onclickoutside';

class ModalContainer extends Component {

  handleClickOutside = evt => {
    this.props.hideModal();
  };

  render () {
    return (
      <div className="modal__container">
        <i className="container__close-button" onClick={this.props.hideModal}></i>
        <div className="container__content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </div>
    )
  }
}
export default onClickOutside(ModalContainer);