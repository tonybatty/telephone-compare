import React from "react";
import PropTypes from "prop-types";

const FormStep1 = ({ handleInputChange, handsets, nextStep }) => (
  <div className="form">
    <p className="form-heading">
      How many handsets/telephones do you wish to connect?
    </p>
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="handsets"
          value="0-10"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={handsets === "0-10"}
        />
        0-10
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="handsets"
          value="10-50"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={handsets === "10-50"}
        />
        10-50
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="handsets"
          value="50-100"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={handsets === "50-100"}
        />
        50-100
      </label>
    </div>

    <div className="form-check">
      <label>
        <input
          type="radio"
          name="handsets"
          value="100+"
          onChange={event => handleInputChange(event)}
          className="form-check__input"
          checked={handsets === "100+"}
        />
        100+
      </label>
    </div>
  </div>
);

FormStep1.propTypes = {
  handleInputChange: PropTypes.func,
  handsets: PropTypes.string,
  nextStep: PropTypes.func
};

export default FormStep1;
