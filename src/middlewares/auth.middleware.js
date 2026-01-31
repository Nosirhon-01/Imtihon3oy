import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

export default (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) throw new CustomError("Token yoq", 401);

  const token = auth.split(" ")[1];
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
};
