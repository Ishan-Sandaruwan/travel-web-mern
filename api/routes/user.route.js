import express  from "express";
import { signout ,updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/signout',signout);
router.put('/update/:userId', verifyToken, updateUser);

export default router;

