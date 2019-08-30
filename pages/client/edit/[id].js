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
import Joi from "joi-browser";

const schemaJoi = Joi.object({
  created: Joi.string()
    .min(24)
    .max(24)
    .required(),
  id: Joi.number()
    .integer()
    .min(0)
    .required(),
  name: Joi.string()
    .min(3)
    .max(64)
    .required(),
  password: Joi.string()
    .min(8)
    .max(64)
    .required(),
  slug: Joi.string()
    .min(3)
    .max(64)
    .required()
});

const canHasJoi = data => {
  const label = Object.keys(data)[0];
  const schema = schemaJoi._inner.children.filter(item => item.key === label)[0]
    .schema;
  let labeledSchema = {};
  labeledSchema[label] = schema;
  let props = {};
  const { error, value } = Joi.object(labeledSchema).validate(data);
  if (error !== null) {
    props.error = true;
    props.helperText = error.details[0].message;
  }
  return props;
};

const EditSingleClientForm = ({ data }) => {
  const { id, created } = data[0];
  const [name, setName] = useState(data[0].name);
  const [slug, setSlug] = useState(data[0].slug);
  const [password, setPassword] = useState(data[0].password);

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Disable button if validation fails
  useEffect(() => {
    // console.log(name, slug, password);
    // console.log(
    //   ["name", "slug", "password"].map(field => {
    //     return getValidator(field);
    //   })
    // );
    setDisableSubmit(false);
  }, [name, slug, password]);

  const [response, setResponse] = React.useState([]);
  const [requestedResponse, setRequestedResponse] = React.useState(false);
  const [loadingResponse, setLoadingResponse] = React.useState(true);

  // const getValidator = fieldID => {
  //   return fieldID === "name" ? validateFieldMinMaxLength(name, 3, 64) : ``;
  //   return fieldID === "slug" ? validateFieldMinMaxLength(slug, 3, 64) : ``;
  //   return fieldID === "password"
  //     ? validateFieldMinMaxLength(password, 3, 64)
  //     : ``;
  // };
  //
  // // const isValid = () => {}
  // const validateFieldMinMaxLength = (value, min, max) => {
  //   let props = {};
  //   if (value.length < min || value.length > max) {
  //     props.error = true;
  //   }
  //   value.length < min
  //     ? (props.helperText = `Needs at least ${min} characters`)
  //     : ``;
  //   value.length > max ? (props.helperText = `Max ${max} characters`) : ``;
  //   return props;
  // };

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
    // console.log("got response", response);
    if (response.affectedRows === 1) {
      Router.push("/clients");
    }
  }

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
  const Dump = ({ stuff }) => <pre>{JSON.stringify(stuff, null, 2)}</pre>;
  const renderWaiting = () => <p>Working&hellip;</p>;
  const { error, value } = schemaJoi.validate({
    id,
    name,
    slug,
    password,
    created
  });
  const renderForm = () => (
    <form noValidate onSubmit={handleSubmit}>
      {requestedResponse && !loadingResponse ? "" : ""}
      <TextField
        id="client-id"
        label="ID"
        value={id}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />
      <TextField
        id="client-name"
        label="Name"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={updateName}
        {...canHasJoi({ name })}
      />
      <TextField
        id="client-slug"
        label="slug"
        value={slug}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />
      <TextField
        id="client-password"
        type="password"
        label="password"
        value={password}
        onChange={updatePassword}
        margin="normal"
        variant="outlined"
        {...canHasJoi({ password })}
      />
      <TextField
        id="client-created"
        label="created"
        value={created}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />

      {maybeRenderResponse()}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={""}
        disabled={error ? true : false}
      >
        Save
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
