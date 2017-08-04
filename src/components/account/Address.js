import React, {Component} from 'react';

export default class Address extends Component {
  
  render(){
    const address = this.props.address;
    const index = this.props.index;
    return (
        <div className="address">
          <div>{address.address1}</div>
          <div>{address.address2}</div>
          <div>{address.city}</div>
          <div>{address.country}</div>
          <div>{address.zip}</div>
          <button className="edit-address-button" onClick={() => this.props.showForm('edit', index)}>Edit</button>
          <button className="delete-address-button" onClick={() => this.props.deleteAddress(address.id,index)}>Delete</button>
          <div className={`edit-address-form ${this.props.visible}`}>
            <span>Address1</span>
            <input ref={ input => { this.address1 = input }} type="text" placeholder={address.address1}/>
            <span>Address2</span>
            <input ref={ input => { this.address2 = input }} type="text" placeholder={address.address2}/>
            <span>City</span>
            <input ref={ input => { this.city = input }} type="text" placeholder={address.city}/>
            <span>Country</span>
            <input ref={ input => { this.country = input }} type="text" placeholder={address.country}/>
            <span>Zip</span>
            <input ref={ input => { this.zip = input }} type="text" placeholder={address.zip}/>
            <button className="submit-address-change-button" onClick={() => this.props.editAddress(index)}>Submit</button>
            <button className="close-address-change-button" onClick={() => this.props.closeForm('edit')}>Close</button>
          </div>
        </div>
    )
  }
}