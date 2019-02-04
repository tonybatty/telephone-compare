import React from "react";
import PropTypes from "prop-types";

const FormStep3 = ({ handleInputChange, broadband, nextStep, prevStep }) => (
  <div className="form">
    <p className="form-heading">
      What broadband do you currently have on site?
    </p>
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="broadband"
          value="ADSL2"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={broadband === "ADSL2"}
        />
        ADSL2
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="broadband"
          value="Fibre to the cabinet"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={broadband === "Fibre to the cabinet"}
        />
        Fibre to the cabinet
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="broadband"
          value="Dedicated Leased Line"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={broadband === "Dedicated Leased Line"}
        />
        Dedicated Leased Line
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="broadband"
          value="Mixture"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={broadband === "Mixture"}
        />
        Mixture
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="broadband"
          value="I don’t know"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={broadband === "I don’t know"}
        />
        I don’t know
      </label>
    </div>
  </div>
);

FormStep3.propTypes = {
  handleInputChange: PropTypes.func,
  broadband: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep3;
