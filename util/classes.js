import Joi from "joi-browser";

class Validator {
  constructor(loadMe) {
    this.loadedSchema = loadMe;
  }
  canHasJoi(data) {
    // const schema = schemaJoi._inner.children.filter(item => item.key === label)[0].schema;
    const label = Object.keys(data)[0];
    let labeledSchema = {};
    labeledSchema[label] = this.loadedSchema[label];
    let props = {};
    const { error, value } = Joi.object(labeledSchema).validate(data);
    if (error !== null) {
      props.error = true;
      props.helperText = error.details[0].message;
    }
    return props;
  }
}

export { Validator };
