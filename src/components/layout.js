import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "../styles/main.scss";
import "../styles/components/layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="site-container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="site-content">{children}</main>
        <footer className="footer">
          Copyright © Telephone Compare {new Date().getFullYear()}. All Rights
          Reserved.
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
