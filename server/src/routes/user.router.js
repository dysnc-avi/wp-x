import { Router } from "express";
import signin from "../controllers/user.signin.js";
import signup from "../controllers/user.signup.js";
import getUser from "../controllers/user.get.js";

const userRouter = Router();

userRouter.route("/:id").get(getUser);
userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);

export default userRouter;
