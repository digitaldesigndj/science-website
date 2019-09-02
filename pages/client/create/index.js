import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Joi from "joi-browser";
import Wrapper from "../../../components/layouts/wrapper";
import { Container, Breadcrumbs, Link, Typography } from "@material-ui/core";
import useFetch from "../../../components/hooks/useFetch";
import useFetchPost from "../../../components/hooks/useFetchPost";
import { wpStringToSlug } from "../../../util/functions";
import clientTableSchema from "../../../schema/client";

import ClientForm from "../../../components/forms/client-form";

const AddSingleClientForm = () => {
  const [response, setResponse] = useState([]);
  const [requestedResponse, setRequestedResponse] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [isDirty, setDirty] = useState(false);

  const postClientUpdate = async body => {
    setRequestedResponse(true);
    const response = await fetch(`/mysql/clients/create`, {
      method: "post",
      body: JSON.stringify(body)
    });
    const json = await response.json();
    setResponse(json);
    setLoadingResponse(false);
    setRequestedResponse(false);
  };

  const handleValidation = freshData => {
    if (isDirty) {
      const newClientTableSchema = {
        name: clientTableSchema.name,
        slug: clientTableSchema.slug,
        password: clientTableSchema.password
      };
      return Joi.object(newClientTableSchema).validate(freshData);
    } else {
      return Joi.object({
        a: Joi.string()
      }).validate({ a: "string" });
    }
  };

  if (requestedResponse && !loadingResponse) {
    if (response.affectedRows === 1) {
      Router.push("/clients");
    }
  }
  // {maybeRenderResponse(response)}
  const renderWaiting = () => <p>Working&hellip;</p>;
  const renderSuccess = () => (
    <ClientForm
      data={[{ id: "", created: "" }]}
      handleFormSubmit={postClientUpdate}
      handleFormValidation={handleValidation}
    />
  );
  return !requestedResponse ? renderSuccess() : renderWaiting();
};

const AddSingleClientPage = ({ clientID }) => {
  return (
    <Wrapper>
      <Head>
        <title>Client Page</title>
      </Head>
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/clients">
            Clients
          </Link>
          <Typography color="textPrimary">Create</Typography>
        </Breadcrumbs>
        <h1>Create New Client</h1>
        <AddSingleClientForm />
      </Container>
    </Wrapper>
  );
};

AddSingleClientPage.getInitialProps = async ({ query }) => ({
  clientID: query.id
});

export default AddSingleClientPage;
