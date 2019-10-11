import React from "react";
import { Hero, GetThis } from "sld-component-library";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Example from "../components/Example";
import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-green-bg">
        <Hero places={Places} title="Pear" />
      </div>
      <div className="is-white-bg is-grey">
        <GetThis flag="pear" />
      </div>
      <div className="is-white is-light-grey-bg">
        <Example />
      </div>
    </Layout>
  );
}
