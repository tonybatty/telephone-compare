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
      <form
        name="test"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        {step === 0 ? (
          <FormStart
            handleInputChange={this.handleInputChange}
            nextStep={this.nextStep}
          />
        ) : null}
        {step !== 1 ? (
          <FormStep1
            handleInputChange={this.handleInputChange}
            handsets={handsets}
            nextStep={this.nextStep}
          />
        ) : null}
        {step !== 2 ? (
          <FormStep2
            handleInputChange={this.handleInputChange}
            sites={sites}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        ) : null}
        {step === 3 ? (
          <FormStep3
            handleInputChange={this.handleInputChange}
            broadband={broadband}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        ) : null}
        {step === 4 ? (
          <FormStep4
            handleInputChange={this.handleInputChange}
            system={system}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        ) : null}
        {step === 5 ? (
          <FormStep5
            handleInputChange={this.handleInputChange}
            timespan={timespan}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        ) : null}
        {step === 6 ? (
          <FormStep6
            handleInputChange={this.handleInputChange}
            location={location}
            distance={distance}
            prevStep={this.prevStep}
          />
        ) : null}
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </form>

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
