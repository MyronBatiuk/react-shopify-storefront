import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Form extends Component {

  state = {
    selectStatus: 'default',
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  changeSelect = (e) => {
    const string = e.target.value;
    if (string.includes('Ask')) {
      this.setState({
        selectStatus: 'default',
      });
    } else {
      this.setState({
        selectStatus: '',
      });
    }
  };

  formSubmit = (e) => {
    const firstName = this.firstName.value ? '' : true;
    const lastName = this.lastName.value ? '' : true;
    const email = this.email.value ? '' : true;
    const message = this.message.value ? '' : true;
    this.setState({
      firstName,
      lastName,
      email,
      message,
    });
    if (firstName || lastName || email || message) {
      e.preventDefault();
      this.setState({error: true});
    }
  };

  render() {
    const page = this.props.page;
    return (
        <div className="form-section">
          <script src="https://cdn.jotfor.ms/static/prototype.forms.js" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/static/jotform.forms.js?3.3.1146" type="text/javascript"></script>
          <form onSubmit={this.formSubmit} action="https://submit.jotformeu.com/submit/71981737208363/" method="post" name="form_71981737208363" id="71981737208363">
            <input type="hidden" name="formID" value="71981737208363"/>
            <input type="hidden" id="simple_spc" name="simple_spc" value="71981737208363"/>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row1_title}</h3>
                  <p className="row__text">{page.row1_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <div className="half-block">
                    <label className="capitalized">First name*</label>
                    <input type="text" id="first_3" name="q3_name[first]" ref={
                      input => this.firstName = input} className={`form-textbox ${this.state.firstName &&
                    'required'}`} size="10" placeholder="George"/>
                  </div>
                  <div className="half-block second">
                    <label className="capitalized">Last name*</label>
                    <input type="text" id="last_3" name="q3_name[last]" ref={
                      input => this.lastName = input} className={`form-textbox ${this.state.lastName &&
                    'required'}`} size="15" placeholder="Washington"/>
                  </div>
                  <label className="capitalized">Email Address*</label>
                  <input type="email" id="input_4" name="q4_email" ref={
                    input => this.email = input} className={`form-textbox ${this.state.email &&
                  'required'}`} size="30" placeholder="thefirst@foundingfathers.com"/>
                  <input type="checkbox" className="form-checkbox" id="input_5_0" name="q5_getEmail[]"/>
                  <label htmlFor="input_5_0" className="css-label">
                  </label>
                  <span className="checkbox-label">Get email updates about new products</span>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row2_title}</h3>
                  <p className="row__text">{page.row2_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <label>Choose a subject</label>
                  <select className={`form-dropdown ${this.state.selectStatus}`} id="input_7" name="q7_subject" onChange={this.changeSelect}>
                    <option value="Ask a Question"> Ask a Question</option>
                    <option value="Change shipping address"> Change shipping address</option>
                    <option value="Change order"> Change order</option>
                    <option value="Request a product"> Request a product</option>
                    <option value="Other (please explain)"> Other (please explain)</option>
                  </select>
                  <label>Write your message*</label>
                  <textarea id="input_6" ref={
                    input => this.message = input} className={`form-textbox ${this.state.message &&
                  'required'}`} name="q6_message" cols="40" rows="6" placeholder="Four score and seven years ago..."/>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid grid--no-gutters grid--table">
                <div className="grid__item medium-up--one-half small--full-width info-item">
                  <div className="policy-urls">
                    <Link to={page.return_policy.url} className="return-policy">{page.return_policy.title}</Link>
                    <span className="divider">|</span>
                    <Link to={page.shipping_policy.url} className="shipping-policy">{page.shipping_policy.title}</Link>
                  </div>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <button id="input_2" type="submit" className="form-submit-button">Send message</button>
                  <p className={`error-message ${this.state.error &&
                  'visible'}`}>*Please fill all the required fields before submit</p>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}