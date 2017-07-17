import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    const page = this.props.page;
    console.log(page);
    let row1text, row1title, row2text, row2title;
    if (page.row1_title === '') {
      row1title = "Get in touch";
    } else {
      row1title = page.row1_title;
    }
    if (page.row1_text === '') {
      row1text = "If you have questions, want to work together or just want to get in touch, use this form. We look forward to hearing from you!";
    } else {
      row1text = page.row1_text;
    }
    if (page.row2_title === '') {
      row2title = "Write your message";
    } else {
      row2title = page.row2_title;
    }
    if (page.row2_text === '') {
      row2text = "Select a subject that is most fitting and create your message. We appreciate you writing to us and will get back to you as soon as we can.";
    } else {
      row2text = page.row2_text;
    }
    return (
        <div className="form-section">
          <form action="https://submit.jotformeu.com/submit/71763556751868/">
            <input type="hidden" name="formID" value="71763556751868"/>
            <input type="hidden" id="simple_spc" name="simple_spc" value="71763556751868"/>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{row1title}</h3>
                  <p className="row__text">{row1text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <input type="text" id="first_3" name="q3_name[first]" className="form-textbox" size="10"/>
                  <input type="text" id="last_3" name="q3_name[last]" className="form-textbox" size="15"/>
                  <input type="email" id="input_4" name="q4_email" className="form-textbox" size="30"/>
                  <input type="checkbox" className="form-checkbox" id="input_11_0" name="q11_getEmail[]"/>
                  <select className="form-dropdown" id="input_9" name="q9_chooseA" >
                    <option value="">Ask a Question</option>
                    <option value="option 1"> option 1</option>
                    <option value="option 2"> option 2</option>
                    <option value="option 3"> option 3</option>
                  </select>
                  <textarea id="input_10" className="form-textarea" name="q10_writeYour" cols="40" rows="6"/>
                  <button id="input_2" type="submit" className="form-submit-button"> Submit</button>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{row2title}</h3>
                  <p className="row__text">{row2text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">

                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}