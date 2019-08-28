import React from "react";
import Head from "next/head";
import Wrapper from "../../components/layouts/wrapper";
import TextField from "@material-ui/core/TextField";

// import fs from 'fs';
// go into next js and get file info. To do an ls thing here.
const Taylor = () => (
  <Wrapper>
    <Head>
      <title>AutoIndex</title>
    </Head>
    hey
    <TextField margin="dense" variant="outlined" />
  </Wrapper>
);

export default Taylor;
