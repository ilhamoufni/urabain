require("dotenv").config();

const express = require("express");

// const path = require("path");

var cors = require("cors");
// const mysql = require("mysql");
const authRouter = require("./routes/AuthRouter");
const documentsRouter = require("./routes/documentsRouter");
const userRouter = require("./routes/userRouter");
// const sequelize = require("./Config/Dbconfig");
const db = require("./models/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Urbaintrack." });
});

app.use("/api", authRouter);
app.use("/api", documentsRouter);
app.use("/api", userRouter);

app.all("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.send("module not found");
  } else if (req.accepts("json")) {
    res.json({
      message: "Not Found",
    });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

const PORT = process.env.PORT || 3001;

db.sequelize
  .sync()
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(() => {
    console.log("Unable to connect db");
  });
