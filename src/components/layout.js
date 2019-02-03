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
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">
          <main className="content__centered">{children}</main>
        </div>
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
