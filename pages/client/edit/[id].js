import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Joi from "joi-browser";
import Wrapper from "../../../components/layouts/wrapper";
import { Container, Breadcrumbs, Link, Typography } from "@material-ui/core";
import useFetch from "../../../components/hooks/useFetch";
import useFetchPost from "../../../components/hooks/useFetchPost";
import { wpStringToSlug } from "../../../util/functions";

import ClientForm from "../../../components/forms/client-form";

import clientTableSchema from "../../../schema/client";

// const Dump = ({ stuff }) => <pre>{JSON.stringify(stuff, null, 2)}</pre>;
// const schemaJoi = Joi.object(clientTableSchema);

// const maybeRenderResponse = response => {
//   return Object.keys(response).length ? (
//     <React.Fragment>
//       <p>The Server Didn't Like that, please try again.</p>
//       <pre>{JSON.stringify(response, null, 2)}</pre>
//     </React.Fragment>
//   ) : (
//     ""
//   );
// };

const EditSingleClientForm = ({ data }) => {
  const { id } = data[0];
  const [response, setResponse] = useState([]);
  const [requestedResponse, setRequestedResponse] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(true);

  const postClientUpdate = async body => {
    setRequestedResponse(true);
    const response = await fetch(`/mysql/clients/update/${id}`, {
      method: "post",
      body: JSON.stringify(body)
    });
    const json = await response.json();
    setResponse(json);
    setLoadingResponse(false);
    setRequestedResponse(false);
  };

  const handleValidation = freshData => {
    return Joi.object(clientTableSchema).validate(freshData);
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
      data={data}
      handleFormSubmit={postClientUpdate}
      handleFormValidation={handleValidation}
    />
  );
  return !requestedResponse ? renderSuccess() : renderWaiting();
};

const LoadEditSingleClientForm = ({ clientID }) => {
  const [data, loading] = useFetch(`/mysql/clients/read/${clientID}`);
  const renderLoading = () => <p>Loading&hellip;</p>;
  const renderFailure = () => (
    <p>No Data! There was an issue getting the requested client #{clientID}</p>
  );
  const renderSuccess = () => <EditSingleClientForm data={data} />;
  const dataIntegrityCheck = () => data[0] !== undefined;
  return loading
    ? renderLoading()
    : dataIntegrityCheck(data)
    ? renderSuccess()
    : renderFailure();
};

// const LoadComponentWithData = ()

const EditSingleClientPage = ({ clientID }) => {
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
          <Typography color="textPrimary">Edit</Typography>
        </Breadcrumbs>
        <h1>Edit Client</h1>
        <LoadEditSingleClientForm clientID={clientID} />
      </Container>
    </Wrapper>
  );
};

EditSingleClientPage.getInitialProps = async ({ query }) => ({
  clientID: query.id
});

export default EditSingleClientPage;
