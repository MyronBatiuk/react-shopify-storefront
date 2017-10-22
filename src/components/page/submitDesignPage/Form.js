import React, {Component} from 'react';
import SuccessImage from './assets/success.png';

export default class Form extends Component {

  state = {
    selectStatus: 'default',
    fileUploaderTitle: 'Drag and drop a file here or click',
    fileUploaderSubtitle: 'AI, EPS, PSD, JPG, or TIFF',
    fileUploadStatus: false,
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    example1: '',
    example2: '',
    story: '',
  };

  uploadFile = () => {
    const fileUploader = document.getElementById('input_8');
    const filesCount = fileUploader.files.length;
    if (filesCount > 1) {
      this.setState({
        fileUploaderTitle: filesCount + ' files successfully uploaded.',
        fileUploaderSubtitle: 'Thanks for sharing them with us!',
        fileUploadStatus: true,
      });
    } else {
      this.setState({
        fileUploaderTitle: 'File successfully uploaded.',
        fileUploaderSubtitle: 'Thanks for sharing it with us!',
        fileUploadStatus: true,
      });
    }
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
    const example1 = this.example1.value ? '' : true;
    const example2 = this.example2.value ? '' : true;
    const story = this.story.value ? '' : true;
    this.setState({
      firstName,
      lastName,
      email,
      example1,
      example2,
      story,
    });
    if ( firstName || lastName || email || example1 || example2 || story ){
      e.preventDefault();
      this.setState({error: true});
    }
  };

  render() {
    const page = this.props.page;
    return (
        <div className="form-section">
          <script src="https://cdn.jotfor.ms/js/vendor/imageinfo.js?v=3.3.1146" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/file-uploader/fileuploader.js?v=3.3.1146"></script>
          <script src="https://cdn.jotfor.ms/static/prototype.forms.js" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/static/jotform.forms.js?3.3.1146" type="text/javascript"></script>
          <form
              onSubmit={this.formSubmit}
              className="jotform-form"
              action="https://submit.jotformeu.com/submit/72013419308348/"
              method="post"
              encType="multipart/form-data"
              name="form_72013419308348"
              id="72013419308348">
            <input type="hidden" name="formID" value="72013419308348"/>
            <input type="hidden" id="simple_spc" name="simple_spc" value="72013419308348"/>
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
                    <label className="capitalized">Last name</label>
                    <input type="text" id="last_3" name="q3_name[last]" ref={
                      input => this.lastName = input} className={`form-textbox ${this.state.lastName &&
                    'required'}`} size="15" placeholder="Washington"/>
                  </div>
                  <label className="capitalized">Email Address*</label>
                  <input type="email" id="input_4" name="q4_emailAddress" ref={
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
                  <label className="capitalized">Link to work examples*</label>
                  <input type="text" id="input_6" name="q6_linkTo6" ref={
                    input => this.example1 = input} className={`form-textbox ${this.state.example1 &&
                  'required'}`} size="20" placeholder="www.declarationofindependence.com/2ndamendment"/>
                  <input type="text" id="input_7" name="q7_linkTo" ref={
                    input => this.example2 = input} className={`form-textbox ${this.state.example2 &&
                  'required'}`} size="20" placeholder="www.dribbble.com/louisianapurchase"/>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row3_title}</h3>
                  <p className="row__text">{page.row3_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <label>Upload an idea (optional)</label>
                  <div className="file-uploader">
                    <h5 className="file-uploader__title">
                      <img src={SuccessImage} alt="" className={this.state.fileUploadStatus ? 'visible' : ''}/>
                      {this.state.fileUploaderTitle}
                    </h5>
                    <h5 className="file-uploader__subtitle">{this.state.fileUploaderSubtitle}</h5>
                    <input type="file" id="input_8" name="q8_clickTo[]" multiple className="form-upload-multiple" onChange={this.uploadFile}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row4_title}</h3>
                  <p className="row__text">{page.row4_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <label>Why would you like to join our community*</label>
                  <textarea id="input_9" className={`form-textbox ${this.state.story &&
                  'required'}`} name="q9_fourScore" ref={
                    input => this.story = input} cols="40" rows="6" placeholder="Four score and seven years ago..."/>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid grid--no-gutters grid--table">
                <div className="grid__item medium-up--one-half small--full-width info-item">
                  <p className="row__small-text">{page.row5_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <button id="input_2" type="submit" className="form-submit-button">Send message</button>
                  <p className={`error-message ${this.state.error && 'visible'}`}>*Please fill all the required fields before submit</p>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}