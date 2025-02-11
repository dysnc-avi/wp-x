import { Router } from "express";
import createWorkspace from "../controllers/workspace.create.js";
import checkAdminPermission from "../middlewares/checkAdminPermission.js";

const workspaceRouter = Router();

workspaceRouter.route("/create").post(checkAdminPermission, createWorkspace);

export default workspaceRouter;
