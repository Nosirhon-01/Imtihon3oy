import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  addAdmin,
  admins,
  adminInfo,
  deleteAdmin
} from "../controllers/admin.controller.js";

const router = Router();

router.post("/", auth, addAdmin);
router.get("/", auth, admins);
router.get("/:id", auth, adminInfo);
router.delete("/:id", auth, deleteAdmin);

export default router;
