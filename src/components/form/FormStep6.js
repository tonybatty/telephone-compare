import React from "react";
import PropTypes from "prop-types";

const FormStep6 = ({ handleInputChange, location, distance, prevStep }) => (
  <div className="form">
    <h1>6. How local do you want your supplier to be?</h1>
    <div className="form-text">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={event => handleInputChange(event)}
        className="form-text__input"
      />
    </div>
    <div className="form-text">
      <label htmlFor="distance">Distance</label>
      <input
        type="text"
        name="distance"
        value={distance}
        onChange={event => handleInputChange(event)}
        className="form-text__input"
      />
    </div>
    <ul className="actions">
      <li>
        <input type="submit" value="Submit" className="submitButton" />
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

FormStep6.propTypes = {
  handleInputChange: PropTypes.func,
  distance: PropTypes.string,
  prevStep: PropTypes.func
};

export default FormStep6;
