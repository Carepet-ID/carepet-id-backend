const Joi = require("@hapi/joi");

const dogCreateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().required(),
  name: Joi.string().min(3).max(30).required(),
  about: Joi.string().max(500),
  age: Joi.number().integer().min(0).required(),
  birthday: Joi.date().required(),
  breed: Joi.string().required(),
  skinColor: Joi.string().required(),
  gender: Joi.string().valid("male", "female").required(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

const dogUpdateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().optional(),
  name: Joi.string().min(3).max(30).optional(),
  about: Joi.string().max(500).optional(),
  age: Joi.number().integer().min(0).optional(),
  birthday: Joi.date().optional(),
  breed: Joi.string().optional(),
  skinColor: Joi.string().optional(),
  gender: Joi.string().valid("male", "female").optional(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

module.exports = { dogCreateSchema, dogUpdateSchema };
