import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow sending cookies
  })
);

//routes
import userRouter from "./routes/user.router.js";
import organisationRouter from "./routes/organisation.route.js";
import workspaceRouter from "./routes/workspace.router.js";
import taskRouter from "./routes/tasks.route.js";

app.use("/user", userRouter);
app.use("/organisation", organisationRouter);
app.use("/workspace", workspaceRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Working",
  });
});

export default app;
