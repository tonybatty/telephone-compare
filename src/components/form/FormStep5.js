import React from "react";
import PropTypes from "prop-types";

const FormStep5 = ({ handleInputChange, timespan, nextStep, prevStep }) => (
  <div className="form">
    <p className="form-heading">
      How soon do you want your solution installed?
    </p>
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="timespan"
          value="ASAP"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={timespan === "ASAP"}
        />
        ASAP
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="timespan"
          value="Next month"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={timespan === "Next month"}
        />
        Next month
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="timespan"
          value="Next Quarter"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={timespan === "Next Quarter"}
        />
        Next Quarter
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="timespan"
          value="Not sure"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={timespan === "Not sure"}
        />
        Not sure
      </label>
    </div>
  </div>
);

FormStep5.propTypes = {
  handleInputChange: PropTypes.func,
  timespan: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep5;
