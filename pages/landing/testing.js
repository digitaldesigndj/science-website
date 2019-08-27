import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
const Taylor = () => (
  <div>
    <Head>
      <title>Testing Page</title>
    </Head>
    <Nav />
    <h1>We are all about Drug Testing</h1>
    <ul>
      <li>Safety First!</li>
      <li>Potency</li>
      <li>Sauce</li>
    </ul>
  </div>
);

export default Taylor;
