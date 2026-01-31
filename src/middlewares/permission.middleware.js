import Permission from "../models/Permission.js";
import CustomError from "../utils/CustomError.js";

export default (model, action) => {
  return async (req, res, next) => {
    if (req.user.role === "SuperAdmin") return next();

    const permission = await Permission.findOne({
      staff: req.user.id,
      permissionModel: model,
      actions: action
    });

    if (!permission)
      throw new CustomError("Ruxsat yoq", 403);

    next();
  };
};

