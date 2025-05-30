const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo.js");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/todos", todoRouter);

module.exports = app;
