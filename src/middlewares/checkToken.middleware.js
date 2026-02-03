import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

export default (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) throw new CustomError("Authorization yoq", 401);

  const token = auth.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.userAgent && decoded.userAgent !== req.headers["user-agent"]) {
    throw new CustomError("User-Agent mos emas", 401);
  }

  req.user = decoded;
  next();
};
