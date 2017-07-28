import React, {Component} from 'react';

export default class Addresses extends Component {

  constructor() {
    super();

    this.state = {
      error: '',
      success: false,
      sendingData: false,
      changePassword: false
    }
  }

  // updateCustomer = (customer,id) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('PUT', '/admin/customers/' + id +'.json');
  //   xhr.setRequestHeader("Authorization", "Basic MWViMTRmMDM5NjI3ZmY4Yzk1ZTQ5OTFhY2EwZTk3Y2U6Nzk3MmE4OGUzNTJmNTE0YzI4YWYzMjU5MDk1MDk1MTI=");
  //   xhr.setRequestHeader("Content-Type", "application/json");
  //   xhr.onload = () => {
  //     if (xhr.status === 200) {
  //       this.setState({
  //         error: '',
  //         success: true
  //       });
  //       const response = JSON.parse(xhr.responseText);
  //       const customer = response.customer;
  //       this.props.updateCustomer(customer);
  //       this.oldPassword.value = '';
  //       this.newPassword.value = '';
  //       this.confirmNewPassword.value = '';
  //     } else {
  //       this.setState({
  //         error: 'Something went wrong, please try again later'
  //       });
  //     }
  //     this.setState({
  //       sendingData: false
  //     });
  //   };
  //   xhr.send(JSON.stringify(customer));
  // };

  // toggleChangePasswordForm = () => {
  //   this.setState({
  //     changePassword: !this.state.changePassword
  //   })
  // };

  // changePassword = () => {
  //   const customer = this.props.customer;
  //   const oldPassword = this.oldPassword.value;
  //   const newPassword = this.newPassword.value;
  //   const confirmNewPassword = this.confirmNewPassword.value;
  //   let error = false;
  //   this.setState({
  //     success: false
  //   });
  //   if ( newPassword.length < 5 || confirmNewPassword.length < 5 ) {
  //     this.setState({
  //       error: 'New Password should contain at least 5 characters'
  //     });
  //     error = true;
  //   }
  //   if ( oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
  //     this.setState({
  //       error: 'Please fill all the fields above'
  //     });
  //     error = true;
  //   }
  //   if ( !error ) {
  //     if ( customer.multipass_identifier === oldPassword ) {
  //       if ( newPassword === confirmNewPassword ) {
  //         this.setState({
  //           sendingData: true
  //         });
  //         const updatedCustomer = {
  //           "customer": {
  //             "multipass_identifier": newPassword
  //           }
  //         };
  //         this.updateCustomer(updatedCustomer,customer.id);
  //       } else {
  //         this.setState({
  //           error: 'New password does not match confirmed password'
  //         });
  //       }
  //     } else {
  //       this.setState({
  //         error: 'Password does not match this account'
  //       })
  //     }
  //   }
  // };

  render() {
    const addressesArray = this.props.addresses;
    console.log(addressesArray);
    let errorMessage, successMessage;
    if (this.state.error !== '')
      errorMessage = <h5 className="error-message">{this.state.error}</h5>;
    if (this.state.success !== '')
      successMessage = <h5 className="success-message">{this.state.success}</h5>;

    let addresses = Object.keys(addressesArray).map(key => (
        <div className="address">
          <div>{addressesArray[key].address1}</div>
          <div>{addressesArray[key].address2}</div>
          <div>{addressesArray[key].city}</div>
          <div>{addressesArray[key].country}</div>
          <div>{addressesArray[key].zip}</div>
          <button className="edit-address-button">Edit</button>
          <button className="delete-address-button">Delete</button>
        </div>
    ));
    return (
        <div className={`my-account__section ${this.state.sendingData ? 'sending-data' : ''}`}>
          <h3 className="section__title">Addresses</h3>
          {addresses}
          {/*<button className="toggle-change-password-form-button" onClick={this.toggleChangePasswordForm}>*/}
          {/*Change password*/}
          {/*</button>*/}

          {/*<div className={`change-password-form ${ this.state.changePassword ? 'visible' : ''}`}>*/}
          {/*<input ref={ input => { this.oldPassword = input }} type="text" placeholder="Type old password"/>*/}
          {/*<input ref={ input => { this.newPassword = input }} type="text" placeholder="Type new password"/>*/}
          {/*<input ref={ input => { this.confirmNewPassword = input }} type="text" placeholder="Confirm new password"/>*/}
          {/*<button className="change-password-button" onClick={this.changePassword}>Submit</button>*/}
          {/*</div>*/}
          {errorMessage}
          {successMessage}
        </div>
    );
  }
}