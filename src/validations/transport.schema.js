import Joi from "joi";

export const transportSchema = Joi.object({
  branch: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  price: Joi.number().required(),
  img: Joi.string()
});
