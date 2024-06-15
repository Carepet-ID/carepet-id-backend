const Joi = require("@hapi/joi");

const productCreateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().required(),
  name: Joi.string().min(5).max(50).required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  linkStore: Joi.string().required(),
});

const productUpdateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().optional(),
  name: Joi.string().min(5).max(50).optional(),
  category: Joi.string().optional(),
  price: Joi.number().optional(),
  linkStore: Joi.string().optional(),
});

module.exports = { productCreateSchema, productUpdateSchema };
