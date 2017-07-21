import React, {Component} from 'react';
export default class Form extends Component {

  constructor(){
    super();

    this.state = {
      selectStatus: 'default'
    }
  }

  changeSelect = (e) => {
    const string = e.target.value;
    if (string.includes('Ask')) {
      this.setState({
        selectStatus: 'default'
      });
    } else {
      this.setState({
        selectStatus: ''
      });
    }
  };

  render() {
    const page = this.props.page;
    console.log(page);
    return (
        <div className="form-section">
          <form action="https://submit.jotformeu.com/submit/72013419308348/">
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
                    <label className="capitalized">First name</label>
                    <input type="text" id="first_3" name="q3_name[first]" className="form-textbox" size="10" placeholder="George"/>
                  </div>
                  <div className="half-block second">
                    <label className="capitalized">Last name</label>
                    <input type="text" id="last_3" name="q3_name[last]" className="form-textbox" size="15" placeholder="Washington"/>
                  </div>
                  <label className="capitalized">Email Address</label>
                  <input type="email" id="input_4" name="q4_emailAddress" className="form-textbox" size="30" placeholder="thefirst@foundingfathers.com"/>
                  <input type="checkbox" className="form-checkbox" id="input_5_0"  name="q5_getEmail[]"/>
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
                  <label className="capitalized">Link to work examples</label>
                  <input type="text" id="input_6" name="q6_linkTo6" className="form-textbox" size="20" placeholder="www.declarationofindependence.com/2ndamendment"/>
                  <input type="text" id="input_7" name="q7_linkTo" className="form-textbox" size="20" placeholder="www.dribbble.com/louisianapurchase"/>
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
                    <h5 className="file-uploader__title">Drag and drop a file here or click</h5>
                    <h5 className="file-uploader__subtitle">AI, EPS, PSD, JPG, or TIFF</h5>
                    <input type="file" id="input_8" name="q8_clickTo[]" multiple className="form-upload-multiple" accept="ai,eps,psd,pdf,jpg,tiff,png"/>
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
                  <label>Four score and seven years...</label>
                  <textarea id="input_9" className="form-textarea" name="q9_fourScore" cols="40" rows="6" placeholder="Four score and seven years ago..."/>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid grid--no-gutters grid--table">
                <div className="grid__item medium-up--one-half small--full-width">
                  <p className="row__small-text">{page.row5_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <button id="input_2" type="submit" className="form-submit-button">Send message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}