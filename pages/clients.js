import React from "react";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";
import SimpleTable from "../components/simple-table";
import Container from "@material-ui/core/Container";

const ClientTable = () => {};

const Taylor = () => (
  <Wrapper>
    <Head>
      <title>Clients Page</title>
    </Head>
    <Container maxWidth="lg">
      This is the clients page. Secure Area.
      <p>Get Client info here and display it in a table.</p>
      <SimpleTable />
    </Container>
  </Wrapper>
);

export default Taylor;
