import express  from "express";
import { signout } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/signout',signout);

export default router;

