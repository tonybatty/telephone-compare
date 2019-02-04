import React from "react";
import PropTypes from "prop-types";

const FormStep6 = ({ handleInputChange, location, distance, prevStep }) => (
  <div className="form-questions">
    <p className="form-heading">How local do you want your supplier to be?</p>
    <div className="form-text">
      <label>
        Location
        <input
          type="text"
          name="location"
          value={location}
          onChange={event => handleInputChange(event)}
          className="form-text__input"
        />
      </label>
    </div>
    <div className="form-text">
      <label>
        Distance
        <input
          type="text"
          name="distance"
          value={distance}
          onChange={event => handleInputChange(event)}
          className="form-text__input"
        />
      </label>
    </div>
  </div>
);

FormStep6.propTypes = {
  handleInputChange: PropTypes.func,
  distance: PropTypes.string,
  prevStep: PropTypes.func
};

export default FormStep6;
