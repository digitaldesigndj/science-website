import React from "react";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";
import TheTable from "../components/clients-table";
import {
  Button,
  Breadcrumbs,
  Typography,
  Container,
  Link
} from "@material-ui/core";
import useFetch from "../components/hooks/useFetch";

const FetchTable = () => {
  const [data, loading] = useFetch("/mysql/clients");
  const renderLoading = () => <p>Loading&hellip;</p>;
  const renderWithData = () => {
    return (
      <TheTable
        headers={["ID", "Name", "Slug", "Created"]}
        rows={data.map(client => {
          const { id, name, slug, created } = client;
          return { id, name, slug, created };
        })}
      />
    );
    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };
  return loading ? renderLoading() : renderWithData();
};

const ClientTable = () => {};

const Taylor = () => (
  <Wrapper>
    <Head>
      <title>Clients Page</title>
    </Head>
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Clients</Typography>
      </Breadcrumbs>
      <h1>Clients</h1>
      This is the clients page. Secure Area.
      <p>Get Client info here and display it in a table.</p>
      <FetchTable />
      <Link href="/client/create">
        <Button variant="contained" color="primary">
          Add New
        </Button>
      </Link>
    </Container>
  </Wrapper>
);

export default Taylor;
