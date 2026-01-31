module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) throw new CustomError(error.message, 400);
  next();
};
