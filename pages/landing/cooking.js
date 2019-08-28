import React from "react";
import Head from "next/head";
import Wrapper from "../../components/layouts/wrapper";

const Cooking = () => (
  <Wrapper>
    <Head>
      <title>Cooking Page</title>
    </Head>
    <Nav />
    <h1>We like to eat</h1>
    <ul>
      <li>Safety First!</li>
      <li>Potency</li>
      <li>Sauce</li>
      <li>Purity</li>
    </ul>
  </Wrapper>
);

export default Cooking;
