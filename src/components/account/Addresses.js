import React, {Component} from 'react';
import Address from './Address';

export default class Addresses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addresses: {},
      editAddressForm: '',
      addAddressForm: false,
      error: '',
      success: false,
      sendingData: false,
    }
  }

  componentWillMount() {
    const customerId = localStorage.getItem('customerId');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/admin/customers/' + customerId + '/addresses.json');
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const object = response.addresses;
        this.setState({
          addresses: object
        });
      }
    };
    xhr.send();
  }

  addAddress = (newAddress, id) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/admin/customers/' + id + '/addresses.json');
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    this.setState({
      success: ''
    });
    xhr.onload = () => {
      if (xhr.status === 201) {
        this.setState({
          error: '',
          success: 'New address was successfully added.'
        });
        this.newAddress1.value = '';
        this.newAddress2.value = '';
        this.newCity.value = '';
        this.newCountry.value = '';
        this.newZip.value = '';
        const addresses = this.state.addresses;
        const newAddressNumber = Object.keys(addresses).length;
        addresses[newAddressNumber] = newAddress.address;
        this.setState({
          addresses
        });
      } else {
        this.setState({
          error: 'Something went wrong, please try again later'
        });
      }
      this.setState({
        sendingData: false
      });
    };
    xhr.send(JSON.stringify(newAddress));
  };

  newAddressValidation = () => {
    const customerId = localStorage.getItem('customerId');
    const address1 = this.newAddress1.value;
    const address2 = this.newAddress2.value;
    const city = this.newCity.value;
    const country = this.newCountry.value;
    const zip = this.newZip.value;
    this.setState({
      success: ''
    });
    if (address1 === '' || address2 === '' || city === '' || country === '' || zip === '') {
      this.setState({
        error: 'Please fill all the fields below'
      });
    } else {
      this.setState({
        sendingData: true
      });

      const newAddress = {
        "address" : {
          "address1": address1,
          "address2": address2,
          "city": city,
          "country": country,
          "zip": zip
        }
      };
      this.addAddress(newAddress, customerId);
    }
  };


  deleteAddress = (id,index) => {
    const customerId = localStorage.getItem('customerId');
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/admin/customers/' + customerId + '/addresses/' + id +'.json');
    xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
    xhr.setRequestHeader("Content-Type", "application/json");
    this.setState({
      sendingData: true,
      success: ''
    });
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.setState({
          success: 'Address was successfully deleted.'
        });
        const addresses = this.state.addresses;
        delete addresses[index];
        this.setState({
          addresses
        });
      }
      if (xhr.status === 422) {
        this.setState({
          error: 'Cannot delete the customers default address.'
        });
      }
      this.setState({
        sendingData: false
      });
    };
    xhr.send();
  };

  editAddress = (key) => {
    console.log(this.address1.value);
  };

  showForm = (form, key) => {
    if (form === 'edit') {
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
    if (form === 'edit') {
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
                   index={key}
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
          {errorMessage}
          {successMessage}
          {addresses}
          <button className="add-address-form-button" onClick={() => this.showForm('add')}>Add new address</button>
          <div className={`add-address-form ${ this.state.addAddressForm ? 'visible' : '' }`}>
            <span>Address1</span>
            <input ref={ input => {
              this.newAddress1 = input
            }} type="text"/>
            <span>Address2</span>
            <input ref={ input => {
              this.newAddress2 = input
            }} type="text"/>
            <span>City</span>
            <input ref={ input => {
              this.newCity = input
            }} type="text"/>
            <span>Country</span>
            <input ref={ input => {
              this.newCountry = input
            }} type="text"/>
            <span>Zip</span>
            <input ref={ input => {
              this.newZip = input
            }} type="text"/>
            <button className="submit-address-add-button" onClick={this.newAddressValidation}>Submit</button>
            <button className="close-address-add-button" onClick={() => this.closeForm('add')}>Close</button>
          </div>
        </div>
    );
  }
}