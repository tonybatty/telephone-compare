import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h1>About</h1>
      <p>Text here</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default About;
