const Joi = require("joi-browser");

const clientTableSchema = {
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
};

module.exports = clientTableSchema;
