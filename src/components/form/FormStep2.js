import React from "react";
import PropTypes from "prop-types";

const FormStep2 = ({ handleInputChange, sites, nextStep, prevStep }) => (
  <div className="form">
    <h1>2. How many sites/offices will your phones be spread across?</h1>
    <div className="form-check">
      <input
        type="radio"
        name="sites"
        value="1"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={sites === "1"}
      />
      <label>1</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="sites"
        value="1-5"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={sites === "1-5"}
      />
      <label>1-5</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="sites"
        value="5-10"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={sites === "5-10"}
      />
      <label>5-10</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="sites"
        value="10+"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={sites === "10+"}
      />
      <label>10+</label>
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

FormStep2.propTypes = {
  handleInputChange: PropTypes.func,
  sites: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep2;
