const Joi = require("@hapi/joi");

const diseaseCreateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any().required(),
  name: Joi.string().min(10).required(),
  category: Joi.string().required(),
  description: Joi.string().min(10).max(100).required(),
  symptoms: Joi.string().required(),
  treatment: Joi.string().min(50).required(),
});

const diseaseUpdateSchema = Joi.object({
  id: Joi.forbidden(),
  photo: Joi.any(),
  name: Joi.string().min(10),
  category: Joi.string().required(),
  description: Joi.string().min(10).max(100),
  symptoms: Joi.string(),
  treatment: Joi.string().min(50),
});

module.exports = { diseaseCreateSchema, diseaseUpdateSchema };
