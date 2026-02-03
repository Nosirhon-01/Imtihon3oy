import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  permissionModel: String,
  actions: [String]
});

export default mongoose.model("Permission", permissionSchema);