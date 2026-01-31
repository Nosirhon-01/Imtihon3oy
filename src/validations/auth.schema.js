import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
  branch: Joi.string().required(),
  birthDate: Joi.date(),
  gender: Joi.string().valid("male", "female"),
  role: Joi.string()
});
