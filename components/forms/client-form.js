import React, { useState } from "react";
import Joi from "joi-browser";
import { wpStringToSlug } from "../../util/functions";
import { TextField, Button } from "@material-ui/core";

import { Validator } from "../../util/classes";
import clientTableSchema from "../../schema/client";
const Validate = new Validator(clientTableSchema);

const ClientForm = ({
  data,
  handleFormSubmit,
  handleFormValidation,
  children
}) => {
  const { id, created } = data[0];
  const [name, setName] = useState(data[0].name);
  const [slug, setSlug] = useState(data[0].slug);
  const [password, setPassword] = useState(data[0].password);

  const updateName = e => {
    const { value } = e.target;
    setName(value);
    setSlug(wpStringToSlug(value));
  };

  const updatePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async e => {
    e ? e.preventDefault() : "";
    await handleFormSubmit(Object.assign(...data, { name, slug, password }));
  };

  const { error } = handleFormValidation(
    Object.assign(...data, { name, slug, password })
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        id="client-id"
        label="ID"
        value={id}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          inputProps: {
            tabIndex: -1
          }
        }}
      />
      <TextField
        id="client-name"
        label="Name"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={updateName}
        {...Validate.canHasJoi({ name })}
      />
      <TextField
        id="client-slug"
        label="slug"
        value={slug}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          inputProps: {
            tabIndex: -1
          }
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
        {...Validate.canHasJoi({ password })}
      />
      <TextField
        id="client-created"
        label="created"
        value={created}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          inputProps: {
            tabIndex: -1
          }
        }}
      />
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
      {children}
    </form>
  );
};

export default ClientForm;
