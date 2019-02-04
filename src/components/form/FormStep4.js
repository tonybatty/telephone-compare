import React from "react";
import PropTypes from "prop-types";

const FormStep4 = ({ handleInputChange, system, nextStep, prevStep }) => (
  <div className="form">
    <p className="form-heading">
      Is there a specific system type you are interested in?
    </p>
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="system"
          value="VoIP"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={system === "VoIP"}
        />
        VoIP
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="system"
          value="PBX"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={system === "PBX"}
        />
        PBX
      </label>
    </div>
  </div>
);

FormStep4.propTypes = {
  handleInputChange: PropTypes.func,
  system: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep4;
