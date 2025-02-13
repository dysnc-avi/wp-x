import { Router } from "express";
import createTask from "../controllers/task.create.js";
import checkAdminPermission from "../middlewares/checkAdminPermission.js";

const taskRouter = Router();

taskRouter.route("/create").post(checkAdminPermission, createTask);

export default taskRouter;
