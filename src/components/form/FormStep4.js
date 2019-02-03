import React from "react";
import PropTypes from "prop-types";

const FormStep4 = ({ handleInputChange, system, nextStep, prevStep }) => (
  <div className="form">
    <input type="hidden" name="bot-field" />
    <h1>4. Is there a specific system type you are interested in?</h1>

    <div className="form-check">
      <input
        type="radio"
        name="system"
        value="VoIP"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={system === "VoIP"}
      />
      <label htmlFor="handsets">VoIP</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="system"
        value="PBX"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={system === "PBX"}
      />
      <label htmlFor="handsets">PBX</label>
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

FormStep4.propTypes = {
  handleInputChange: PropTypes.func,
  system: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep4;
