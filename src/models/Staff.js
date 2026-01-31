import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  username: { type: String, unique: true },
  password: String,
  birthDate: Date,
  gender: String,
  role: { type: String, enum: ["Staff", "Admin"], default: "Staff" }
});

export default mongoose.model("Staff", staffSchema);
