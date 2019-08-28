import React from "react";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";

const Cooking = () => (
  <Wrapper>
    <Head>
      <title>Fresh Frozen</title>
    </Head>
    <Nav />
    <h1>Fresh Frozen</h1>
    <ul>
      <li>Freshness is our priority!</li>
      <li>
        Keeping Flower and Trim frozen before processing and during transit
        keeps those smelly volitales exactly where we want them. (In the plant,
        until its in the extractor!)
      </li>
    </ul>
  </Wrapper>
);

export default Cooking;
