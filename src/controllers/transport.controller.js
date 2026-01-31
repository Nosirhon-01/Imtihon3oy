import Transport from "../models/Transport.js";

export const getAll = async (req, res) => {
  const data = await Transport.find();
  res.json(data);
};

export const create = async (req, res) => {
  const transport = await Transport.create(req.body);
  res.status(201).json(transport);
};
