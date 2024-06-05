const Joi = require("@hapi/joi");

const articleCreateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.string().uri().required(),
  title: Joi.string().min(10).required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

const articleUpdateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.string().uri(),
  title: Joi.string().min(10),
  category: Joi.string(),
  content: Joi.string(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

module.exports = { articleCreateSchema, articleUpdateSchema };
