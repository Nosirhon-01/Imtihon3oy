import Branch from "../models/Branch.js";

export const addBranch = async (req, res) => {
  const branch = await Branch.create(req.body);
  res.status(201).json(branch);
};

export const branches = async (req, res) => {
  res.json(await Branch.find());
};

export const branchInfo = async (req, res) => {
  res.json(await Branch.findById(req.params.id));
};

export const changeBranch = async (req, res) => {
  res.json(
    await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

export const deleteBranch = async (req, res) => {
  await Branch.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
