import React, {Component} from 'react';
import Address from './Address';

export default class Addresses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addresses: this.props.addresses,
      editAddressForm: '',
      addAddressForm: false,
      error: '',
      success: false,
      sendingData: false,
    }
  }

  deleteAddress = (key) => {
    console.log('delete');
  };

  editAddress = (key) => {
    console.log(this.address1.value);
  };

  showForm = (form,key) => {
    if ( form === 'edit') {
      this.setState({
        editAddressForm: key
      });
    } else {
      this.setState({
        addAddressForm: true
      });
    }
  };
  closeForm = (form) => {
    if ( form === 'edit') {
      this.setState({
        editAddressForm: ''
      });
    } else {
      this.setState({
        addAddressForm: false
      });
    }

  };
  render() {
    const addressesArray = this.state.addresses;
    const editAddressForm = this.state.editAddressForm;
    console.log(addressesArray);
    let errorMessage, successMessage;
    if (this.state.error !== '')
      errorMessage = <h5 className="error-message">{this.state.error}</h5>;
    if (this.state.success !== '')
      successMessage = <h5 className="success-message">{this.state.success}</h5>;

    let addresses = Object.keys(addressesArray).map(key => {
      let visible;
      if (editAddressForm === key)
        visible = 'visible';
      return (
          <Address key={key}
                   address={addressesArray[key]}
                   id={key}
                   visible={visible}
                   showForm={this.showForm}
                   editForm={this.editAddress}
                   closeForm={this.closeForm}
                   deleteAddress={this.deleteAddress}
          />
      )
    });
    return (
        <div className={`my-account__section ${this.state.sendingData ? 'sending-data' : ''}`}>
          <h3 className="section__title">Addresses</h3>
          {addresses}
          <button className="add-address-form-button" onClick={() => this.showForm('add')}>Add new address</button>
          <div className={`add-address-form ${ this.state.addAddressForm ? 'visible' : '' }`}>
            <span>Address1</span>
            <input ref={ input => { this.newAddress1 = input }} type="text"/>
            <span>Address2</span>
            <input ref={ input => { this.newAddress2 = input }} type="text"/>
            <span>City</span>
            <input ref={ input => { this.newCity = input }} type="text"/>
            <span>Country</span>
            <input ref={ input => { this.newCountry = input }} type="text"/>
            <span>Zip</span>
            <input ref={ input => { this.newZip = input }} type="text"/>
            <button className="submit-address-add-button" onClick={this.addAddress}>Submit</button>
            <button className="close-address-add-button" onClick={() => this.closeForm('add')}>Close</button>
          </div>
          {errorMessage}
          {successMessage}
        </div>
    );
  }
}