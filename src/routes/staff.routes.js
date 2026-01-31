import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import * as controller from "../controllers/staff.controller.js";

const router = Router();

router.get("/", auth, controller.staffs);
router.get("/:id", auth, controller.staffInfo);
router.put("/:id", auth, controller.changeStaff);
router.delete("/:id", auth, controller.deleteStaff);

export default router;
