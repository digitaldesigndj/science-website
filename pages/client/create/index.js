import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Wrapper from "../../../components/layouts/wrapper";
import {
  TextField,
  Container,
  Button,
  Breadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import useFetch from "../../../components/hooks/useFetch";
import useFetchPost from "../../../components/hooks/useFetchPost";
import { wpStringToSlug } from "../../../components/_functions.js";
// import Joi from "joi";

const EditSingleClientForm = ({ data }) => {
  const { id } = data[0];
  const [name, setName] = useState(data[0].name);
  const [slug, setSlug] = useState(data[0].slug);
  const [password, setPassword] = useState(data[0].password);

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Disable button if validation fails
  useEffect(() => {
    console.log(name, slug, password);
    console.log(
      ["name", "slug", "password"].map(field => {
        return getValidator(field);
      })
    );
    setDisableSubmit(false);
  }, [name, slug, password]);

  const [response, setResponse] = React.useState([]);
  const [requestedResponse, setRequestedResponse] = React.useState(false);
  const [loadingResponse, setLoadingResponse] = React.useState(true);

  const getValidator = fieldID => {
    return fieldID === "name" ? validateFieldMinMaxLength(name, 3, 64) : ``;
    return fieldID === "slug" ? validateFieldMinMaxLength(slug, 3, 64) : ``;
    return fieldID === "password"
      ? validateFieldMinMaxLength(password, 3, 64)
      : ``;
  };

  // const isValid = () => {}
  const validateFieldMinMaxLength = (value, min, max) => {
    let props = {};
    if (value.length < min || value.length > max) {
      props.error = true;
    }
    value.length < min
      ? (props.helperText = `Needs at least ${min} characters`)
      : ``;
    value.length > max ? (props.helperText = `Max ${max} characters`) : ``;
    return props;
  };

  const updateName = e => {
    const { value } = e.target;
    setName(value);
    setSlug(wpStringToSlug(value));
  };

  const updatePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const postUrl = async () => {
    setRequestedResponse(true);
    const response = await fetch(`/mysql/clients/update/${id}`, {
      method: "post",
      body: JSON.stringify(Object.assign(...data, { name, slug, password }))
    });
    const json = await response.json();
    setResponse(json);
    setLoadingResponse(false);
    setRequestedResponse(false);
  };

  const handleSubmit = async e => {
    e ? e.preventDefault() : "";
    console.log(Object.assign(...data, { name, slug, password }));
    // Ready to shoot off Async MYSQL/API request here and report back
    await postUrl();
  };
  if (requestedResponse && !loadingResponse) {
    console.log("got response", response);
    if (response.affectedRows === 1) {
      Router.push("/clients");
    }
  }

  // const validateFieldPassword = value => {
  //   let props = {};
  //   if (value.length < 7 || value.length > 64) {
  //     props.error = true;
  //   }
  //   value.length < 7 ? (props.helperText = "Needs at least 8 characters") : ``;
  //   value.length > 64 ? (props.helperText = "Max 64 characters") : ``;
  //   return props;
  // };
  // const formSubmit = () => {
  //   // if (!loading) {
  //   //
  //   // }
  //   // return [response, loading];
  //   // console.log(response);
  //   return;
  // };

  const maybeRenderResponse = () => {
    return Object.keys(response).length ? (
      <React.Fragment>
        <p>The Server Didn't Like that, please try again.</p>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </React.Fragment>
    ) : (
      ""
    );
  };
  const renderWaiting = () => <p>Working&hellip;</p>;
  const renderForm = () => (
    <form noValidate onSubmit={handleSubmit}>
      {maybeRenderResponse()}
      {requestedResponse && !loadingResponse ? "" : ""}
      <TextField
        id="client-name"
        label="Name"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={updateName}
        {...getValidator("name")}
      />
      <TextField
        id="client-slug"
        label="slug"
        value={slug}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          inputProps: { tabIndex: -1 }
        }}
        helperText={"Auto Generated from Name"}
      />
      <TextField
        id="client-password"
        type="password"
        label="password"
        value={password}
        onChange={updatePassword}
        margin="normal"
        variant="outlined"
        {...getValidator("password")}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={""}
        disabled={disableSubmit}
      >
        Edit
      </Button>
      <pre>
        {JSON.stringify(
          Object.assign(...data, { name, slug, password }),
          null,
          2
        )}
      </pre>
    </form>
  );
  return !requestedResponse ? renderForm() : renderWaiting();
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
        <h1>Add New Client</h1>
        <EditSingleClientForm data={[{ name: "", slug: "", password: "" }]} />
      </Container>
    </Wrapper>
  );
};

EditSingleClientPage.getInitialProps = async ({ query }) => ({
  clientID: query.id
});

export default EditSingleClientPage;
