import { Router } from "express";
import signin from "../controllers/user.signin.js";
import signup from "../controllers/user.signup.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);

export default userRouter;
