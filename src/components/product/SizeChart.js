import React , {Component} from 'react';
import ModalContainer from './ModalContainer';

export default class SizeChart extends Component {

  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  showModal = () => {
    this.setState({
      open: true
    })
  };

  hideModal = () => {
    this.setState({
      open: false
    })
  };

  render() {

    return (
      <div className="product__size-chart">
        <span className="size-chart__title" onClick={this.showModal}>Size chart</span>

        <div className={`size-chart__modal ${this.state.open ? 'open' : ''}`}>
          <ModalContainer hideModal={this.hideModal}/>
        </div>
      </div>
    )
  }
}