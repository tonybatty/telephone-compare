import React from "react";
import PropTypes from "prop-types";

const FormStart = ({ handleInputChange, handsets, nextStep }) => (
  <div className="form">
    <input type="hidden" name="bot-field" />
    <h1>Free Business Telephone System Quote</h1>
    <ul className="actions">
      <li>
        <input
          type="button"
          onClick={event => nextStep(event)}
          value="Start Your Quote"
          className="nextButton"
        />
      </li>
    </ul>
  </div>
);

FormStart.propTypes = {
  handleInputChange: PropTypes.func,
  handsets: PropTypes.string,
  nextStep: PropTypes.func
};

export default FormStart;
