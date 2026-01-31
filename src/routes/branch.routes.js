import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import * as controller from "../controllers/branch.controller.js";

const router = Router();

router.post("/", auth, controller.addBranch);
router.get("/", auth, controller.branches);
router.get("/:id", auth, controller.branchInfo);
router.put("/:id", auth, controller.changeBranch);
router.delete("/:id", auth, controller.deleteBranch);

export default router;
