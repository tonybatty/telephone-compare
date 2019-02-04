import React from "react";
import "../styles/components/howItWorks.scss";
import form from "../images/form.png";
import report from "../images/report.png";
import profile from "../images/profile.png";

const HowItWorks = () => (
  <div className="howItWorks container">
    <h1 className="howItWorks__title">How it works</h1>

    <div className="row">
      <div className="row__column">
        <img src={form} alt="form" />
        <h2>Fill out the form</h2>
        <p>
          Answer a few simple questions about your business telecoms
          requirements
        </p>
      </div>
      <div className="row__column">
        <img src={report} alt="report" />
        <h2>Receive up to five Quotes from local suppliers</h2>
        <p>They will not receive your information, you contact them</p>
      </div>
      <div className="row__column">
        <img src={profile} alt="profile" />
        <h2>View your suppliers profiles</h2>
        <p>Find out about them and see other users reviews</p>
      </div>
    </div>
  </div>
);

export default HowItWorks;
