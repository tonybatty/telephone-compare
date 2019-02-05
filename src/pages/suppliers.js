import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Suppliers = () => (
  <Layout>
    <SEO title="Suppliers" />
    <div className="container">
      <div className="content">
        <h1>Suppliers</h1>
        <p>Text here</p>
        <Link to="/">Go back to the homepage</Link>
      </div>{" "}
    </div>
  </Layout>
);

export default Suppliers;
