const Joi = require("@hapi/joi");

const articleCreateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().required(),
  title: Joi.string().min(10).required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

const articleUpdateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().optional(),
  title: Joi.string().min(10).optional(),
  category: Joi.string().optional(),
  content: Joi.string().optional(),
  createdAt: Joi.forbidden(),
  updatedAt: Joi.forbidden(),
});

module.exports = { articleCreateSchema, articleUpdateSchema };
