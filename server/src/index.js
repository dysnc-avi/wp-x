import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
