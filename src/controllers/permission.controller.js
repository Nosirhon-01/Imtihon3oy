import Permission from "../models/Permission.js";

export const addPermission = async (req, res) => {
  const permission = await Permission.create(req.body);
  res.status(201).json(permission);
};

export const deletePermission = async (req, res) => {
  await Permission.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const changePermission = async (req, res) => {
  res.json(
    await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

export const allPermissions = async (req, res) => {
  res.json(await Permission.find());
};

export const ownPermissions = async (req, res) => {
  res.json(await Permission.find({ staff: req.user.id }));
};
