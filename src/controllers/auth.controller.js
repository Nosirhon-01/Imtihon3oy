import Staff from "../models/Staff.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/token.js";
import CustomError from "../utils/CustomError.js";

export const register = async (req, res) => {
  const password = await hashPassword(req.body.password);
  const staff = await Staff.create({ ...req.body, password });

  const token = generateToken({ id: staff._id, role: staff.role });
  res.json({ token });
};

export const login = async (req, res) => {
  const user = await Staff.findOne({ username: req.body.username });
  if (!user) throw new CustomError("User topilmadi", 404);

  const match = await comparePassword(req.body.password, user.password);
  if (!match) throw new CustomError("Parol notogri", 401);

  const token = generateToken({ id: user._id, role: user.role });
  res.json({ token });
};
