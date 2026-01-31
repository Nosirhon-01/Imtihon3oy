import Admin from "../models/Admin.js";
import { hashPassword } from "../utils/hash.js";
import CustomError from "../utils/CustomError.js";

export const addAdmin = async (req, res) => {
  const password = await hashPassword(req.body.password);
  const admin = await Admin.create({
    username: req.body.username,
    password
  });
  res.status(201).json(admin);
};

export const admins = async (req, res) => {
  res.json(await Admin.find());
};

export const adminInfo = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) throw new CustomError("Admin topilmadi", 404);
  res.json(admin);
};

export const deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
