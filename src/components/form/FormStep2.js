import React from "react";
import PropTypes from "prop-types";

const FormStep2 = ({ handleInputChange, sites, nextStep, prevStep }) => (
  <div className="form-questions">
    <p className="form-heading">
      How many sites/offices will your phones be spread across?
    </p>
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="sites"
          value="1"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={sites === "1"}
        />
        1
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="sites"
          value="1-5"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={sites === "1-5"}
        />
        1-5
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="sites"
          value="5-10"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={sites === "5-10"}
        />
        5-10
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="sites"
          value="10+"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={sites === "10+"}
        />
        10+
      </label>
    </div>
  </div>
);

FormStep2.propTypes = {
  handleInputChange: PropTypes.func,
  sites: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep2;
