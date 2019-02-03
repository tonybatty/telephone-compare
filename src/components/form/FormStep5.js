import React from "react";
import PropTypes from "prop-types";

const FormStep5 = ({ handleInputChange, timespan, nextStep, prevStep }) => (
  <div className="form">
    <input type="hidden" name="bot-field" />
    <h1>5. How soon do you want your solution installed?</h1>

    <div className="form-check">
      <input
        type="radio"
        name="timespan"
        value="ASAP"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={timespan === "ASAP"}
      />
      <label htmlFor="handsets">ASAP</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="timespan"
        value="Next month"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={timespan === "Next month"}
      />
      <label htmlFor="handsets">Next month</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="timespan"
        value="Next Quarter"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={timespan === "Next Quarter"}
      />
      <label htmlFor="handsets">Next Quarter</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="timespan"
        value="Not sure"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={timespan === "Not sure"}
      />
      <label htmlFor="handsets">Not sure</label>
    </div>
    <ul className="actions">
      <li>
        <button
          type="button"
          onClick={e => nextStep(e)}
          value="Continue"
          className="nextButton"
        >
          Continue
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={e => prevStep(e)}
          value="Previous"
          className="prevButton"
        >
          {"<< Previous"}
        </button>
      </li>
    </ul>
  </div>
);

FormStep5.propTypes = {
  handleInputChange: PropTypes.func,
  timespan: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep5;
