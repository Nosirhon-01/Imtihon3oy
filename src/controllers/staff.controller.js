import Staff from "../models/Staff.js";

export const staffs = async (req, res) => {
  res.json(await Staff.find().select("-password"));
};

export const staffInfo = async (req, res) => {
  res.json(
    await Staff.findById(req.params.id).select("-password")
  );
};

export const changeStaff = async (req, res) => {
  res.json(
    await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

export const deleteStaff = async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
