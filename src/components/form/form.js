import React, { Component } from "react";
import FormStart from "./FormStart";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import FormStep6 from "./FormStep6";
import "../../styles/components/form.scss";

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

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit Form");
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
      <section className="container form">
        <div className="content">
          <form
            onSubmit={this.handleSubmit}
            name="quote"
          >
            <div className="form-content">
              {step === 0 && (
                <FormStart
                  handleInputChange={this.handleInputChange}
                  nextStep={this.nextStep}
                />
              )}
              {step === 1 && (
                <FormStep1
                  handleInputChange={this.handleInputChange}
                  handsets={handsets}
                  nextStep={this.nextStep}
                />
              )}
              {step === 2 && (
                <FormStep2
                  handleInputChange={this.handleInputChange}
                  sites={sites}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              )}
              {step === 3 && (
                <FormStep3
                  handleInputChange={this.handleInputChange}
                  broadband={broadband}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              )}
              {step === 4 && (
                <FormStep4
                  handleInputChange={this.handleInputChange}
                  system={system}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              )}
              {step === 5 && (
                <FormStep5
                  handleInputChange={this.handleInputChange}
                  timespan={timespan}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              )}
              {step === 6 && (
                <FormStep6
                  handleInputChange={this.handleInputChange}
                  location={location}
                  distance={distance}
                  prevStep={this.prevStep}
                />
              )}
              <div className="actions">
                {step === 6 && (
                  <button
                    type="submit"
                    onClick={e => this.handleSubmit(e)}
                    value="Submit"
                    className="actions__submitButton"
                  >
                    SUBMIT
                  </button>
                )}
                {step > 0 && step < 6 && (
                  <button
                    type="button"
                    onClick={e => this.nextStep(e)}
                    value="Continue"
                    className="actions__nextButton"
                  >
                    CONTINUE
                  </button>
                )}
                {step > 1 && (
                  <button
                    type="button"
                    onClick={e => this.prevStep(e)}
                    value="Previous"
                    className="actions__prevButton"
                  >
                    {"<< PREVIOUS"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
