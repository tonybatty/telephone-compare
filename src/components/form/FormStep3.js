import React from "react";
import PropTypes from "prop-types";

const FormStep3 = ({ handleInputChange, broadband, nextStep, prevStep }) => (
  <div className="form">
    <h1>3. What broadband do you currently have on site?</h1>
    <div className="form-check">
      <input
        type="radio"
        name="broadband"
        value="ADSL2"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={broadband === "ADSL2"}
      />
      <label htmlFor="handsets">ADSL2</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="broadband"
        value="Fibre to the cabinet"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={broadband === "Fibre to the cabinet"}
      />
      <label htmlFor="handsets">Fibre to the cabinet</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="broadband"
        value="Dedicated Leased Line"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={broadband === "Dedicated Leased Line"}
      />
      <label htmlFor="handsets">Dedicated Leased Line</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="broadband"
        value="Mixture"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={broadband === "Mixture"}
      />
      <label htmlFor="handsets">Mixture</label>
    </div>

    <div className="form-check">
      <input
        type="radio"
        name="broadband"
        value="I don’t know"
        onChange={event => handleInputChange(event)}
        className="form-check__input"
        checked={broadband === "I don’t know"}
      />
      <label htmlFor="handsets">I don’t know</label>
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

FormStep3.propTypes = {
  handleInputChange: PropTypes.func,
  broadband: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default FormStep3;
