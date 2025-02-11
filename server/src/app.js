import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

//routes
import userRouter from "./routes/user.router.js";
import organisationRouter from "./routes/organisation.route.js";
import workspaceRouter from "./routes/workspace.router.js";

app.use("/user", userRouter);
app.use("/organisation", organisationRouter);
app.use("/workspace", workspaceRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Working",
  });
});

export default app;
