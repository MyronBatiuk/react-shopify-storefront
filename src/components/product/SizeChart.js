import React , {Component} from 'react';

export default class SizeChart extends Component {

  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  toggleModal = () => {
    this.setState({
      open: !this.state.open
    })
  };

  render() {

    return (
      <div className="product__size-chart">
        <span className="size-chart__title" onClick={this.toggleModal}>Size chart</span>

        <div className={`size-chart__modal ${this.state.open ? 'open' : ''}`}>
          <div className="modal__container">
            <i className="container__close-button" onClick={this.toggleModal}></i>

            <div className="container__content">
              <img src="http://www.50statesapparel.com/images/FS_Size_Chart_Lg.jpg" alt="Shirt Size Chart"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}