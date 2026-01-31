import jwt from "jsonwebtoken";
import { JWT_CONFIG } from "../config/jwt.js";

export const generateToken = (payload) =>
  jwt.sign(payload, JWT_CONFIG.secret, { expiresIn: JWT_CONFIG.expiresIn });
