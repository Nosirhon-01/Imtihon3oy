import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import permission from "../middlewares/permission.middleware.js";

const router = Router();


router.get("/", auth, permission("VIEW_TRANSPORT"), (req, res) => {
  res.json({ message: "ok" });
});

export default router;
