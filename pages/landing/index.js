import React from "react";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";
// go into next js and get file info. To do an ls thing here.
const Taylor = () => (
  <Wrapper>
    <Head>
      <title>AutoIndex</title>
    </Head>

    <ul>
      <li>Safety First!</li>
      <li>Potency</li>
      <li>Sauce</li>
    </ul>
  </Wrapper>
);

export default Taylor;
