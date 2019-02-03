import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Suppliers = () => (
  <Layout>
    <SEO title="Suppliers" />
    <h1>Suppliers</h1>
    <p>Text here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Suppliers;