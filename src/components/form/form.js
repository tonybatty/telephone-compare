import React, { Component } from "react";
import FormStart from "./FormStart";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import FormStep6 from "./FormStep6";
import "../../styles/components/form.scss";
import Form2 from "./form2";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      handsets: "",
      sites: "",
      broadband: "",
      system: "",
      timespan: "",
      location: "",
      distance: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  nextStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(target, value, name);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    console.log("handleSubmit");
    console.log(encode({ "form-name": "test", ...this.state }));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const {
      step,
      handsets,
      sites,
      broadband,
      system,
      timespan,
      location,
      distance
    } = this.state;

    return (

        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="handsets" value={this.state.handsets} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="sites" value={this.state.sites} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="broadband" value={this.state.broadband} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="system" value={this.state.system} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="timespan" value={this.state.timespan} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="location" value={this.state.location} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="distance" value={this.state.distance} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

    //   <form onSubmit={this.handleSubmit} name="test">
    //     {step === 0 ? (
    //       <FormStart
    //         handleInputChange={this.handleInputChange}
    //         nextStep={this.nextStep}
    //       />
    //     ) : null}
    //     {step === 1 ? (
    //       <FormStep1
    //         handleInputChange={this.handleInputChange}
    //         handsets={handsets}
    //         nextStep={this.nextStep}
    //       />
    //     ) : null}
    //     {step === 2 ? (
    //       <FormStep2
    //         handleInputChange={this.handleInputChange}
    //         sites={sites}
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //       />
    //     ) : null}
    //     {step === 3 ? (
    //       <FormStep3
    //         handleInputChange={this.handleInputChange}
    //         broadband={broadband}
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //       />
    //     ) : null}
    //     {step === 4 ? (
    //       <FormStep4
    //         handleInputChange={this.handleInputChange}
    //         system={system}
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //       />
    //     ) : null}
    //     {step === 5 ? (
    //       <FormStep5
    //         handleInputChange={this.handleInputChange}
    //         timespan={timespan}
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //       />
    //     ) : null}
    //     {step === 6 ? (
    //       <FormStep6
    //         handleInputChange={this.handleInputChange}
    //         location={location}
    //         distance={distance}
    //         prevStep={this.prevStep}
    //       />
    //     ) : null}
    //     <ul className="actions">
    //       <li>
    //         <input type="submit" value="Send Message" className="special" />
    //       </li>
    //       <li>
    //         <input type="reset" value="Clear" />
    //       </li>
    //     </ul>
    //   </form>

      //   <form
      //     name="quote"
      //     method="post"
      //     data-netlify="true"
      //     data-netlify-honeypot="bot-field"
      //   >
      //     <input type="hidden" name="form-name" value="quote" />
      //     {step === 0 ? (
      //       <FormStart
      //         handleInputChange={this.handleInputChange}
      //         nextStep={this.nextStep}
      //       />
      //     ) : null}
      //     {step === 1 ? (
      //       <FormStep1
      //         handleInputChange={this.handleInputChange}
      //         handsets={handsets}
      //         nextStep={this.nextStep}
      //       />
      //     ) : null}
      //     {step === 2 ? (
      //       <FormStep2
      //         handleInputChange={this.handleInputChange}
      //         sites={sites}
      //         nextStep={this.nextStep}
      //         prevStep={this.prevStep}
      //       />
      //     ) : null}
      //     {step === 3 ? (
      //       <FormStep3
      //         handleInputChange={this.handleInputChange}
      //         broadband={broadband}
      //         nextStep={this.nextStep}
      //         prevStep={this.prevStep}
      //       />
      //     ) : null}
      //     {step === 4 ? (
      //       <FormStep4
      //         handleInputChange={this.handleInputChange}
      //         system={system}
      //         nextStep={this.nextStep}
      //         prevStep={this.prevStep}
      //       />
      //     ) : null}
      //     {step === 5 ? (
      //       <FormStep5
      //         handleInputChange={this.handleInputChange}
      //         timespan={timespan}
      //         nextStep={this.nextStep}
      //         prevStep={this.prevStep}
      //       />
      //     ) : null}
      //     {step === 6 ? (
      //       <FormStep6
      //         handleInputChange={this.handleInputChange}
      //         location={location}
      //         distance={distance}
      //         prevStep={this.prevStep}
      //       />
      //     ) : null}
      //   </form>
    );
  }
}

export default Form;
