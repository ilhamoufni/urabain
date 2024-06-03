const express = require('express');
var cors = require('cors')
const mysql=require('mysql')
const dotenv = require("dotenv").config();
const authRouter = require("./routes/AuthRouter")
const documentsRouter = require("./routes/documentsRouter")
const userRouter = require("./routes/userRouter")

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Urbaintrack." });
  });

app.use('/api', authRouter)
app.use('/api', documentsRouter)
app.use('/api', userRouter)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});