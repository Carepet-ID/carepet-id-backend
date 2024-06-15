const Joi = require("@hapi/joi");

const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  // password: Joi.string().min(8).required(),
  password: Joi.string().required(),
});

const userCreateSchema = Joi.object({
  photo: Joi.any().optional(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required(),
  id: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

const userUpdateSchema = Joi.object({
  photo: Joi.any().optional(),
  username: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(8).optional(),
  role: Joi.forbidden(), // Role tidak dapat diubah saat pembaruan
  id: Joi.forbidden(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

module.exports = { userLoginSchema, userCreateSchema, userUpdateSchema };
