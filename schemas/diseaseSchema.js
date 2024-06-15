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
  photo: Joi.any().optional(),
  name: Joi.string().min(10).optional(),
  category: Joi.string().required().optional(),
  description: Joi.string().min(10).max(200).optional(),
  symptoms: Joi.string().optional(),
  treatment: Joi.string().min(50).optional(),
});

module.exports = { diseaseCreateSchema, diseaseUpdateSchema };
