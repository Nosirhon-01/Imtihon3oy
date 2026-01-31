import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import * as controller from "../controllers/permission.controller.js";

const router = Router();

router.post("/", auth, controller.addPermission);
router.get("/", auth, controller.allPermissions);
router.get("/own", auth, controller.ownPermissions);
router.put("/:id", auth, controller.changePermission);
router.delete("/:id", auth, controller.deletePermission);

export default router;
