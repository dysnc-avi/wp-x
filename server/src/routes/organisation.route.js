import { Router } from "express";
import createNewOrganisation from "../controllers/organisation.create.js";
import joinOrganisation from "../controllers/organisation.join.js";
import checkJoined from "../middlewares/checkAlreadyJoined.js";
import getOrganisation from "../controllers/organisation.get.js";

const organisationRouter = Router();

organisationRouter.route("/create").post(createNewOrganisation);
organisationRouter.route("/join/:id").post(checkJoined, joinOrganisation);
organisationRouter.route("/:id").get(getOrganisation);

export default organisationRouter;
