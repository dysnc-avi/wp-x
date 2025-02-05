import express from "express";
import userRouter from "./routes/user.router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Working",
  });
});

export default app;
