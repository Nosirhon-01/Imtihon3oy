import mongoose from "mongoose";

const transportSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  model: String,
  color: String,
  img: String,
  price: Number
}, { timestamps: true });

export default mongoose.model("Transport", transportSchema);
