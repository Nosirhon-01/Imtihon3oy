import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: String,
  address: String,
  time: String
}, { timestamps: true });

export default mongoose.model("Branch", branchSchema);
