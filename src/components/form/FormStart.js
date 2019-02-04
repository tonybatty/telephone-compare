import React from "react";
import PropTypes from "prop-types";

const FormStart = ({ handleInputChange, handsets, nextStep }) => (
  <div className="form">
    <p className="form-heading">Free Business Telephone System Quote</p>
    <input
      type="button"
      onClick={event => nextStep(event)}
      value="START YOUR QUOTE"
      className="actions__nextButton"
    />
  </div>
);

FormStart.propTypes = {
  handleInputChange: PropTypes.func,
  handsets: PropTypes.string,
  nextStep: PropTypes.func
};

export default FormStart;
