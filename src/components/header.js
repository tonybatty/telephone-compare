import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/logo.png";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-brand__title" to="/">
          <img className="logo" src={logo} alt="logo" />
          {siteTitle}
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-end__item">About</Link>
          <Link className="navbar-end__item">Suppliers</Link>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
