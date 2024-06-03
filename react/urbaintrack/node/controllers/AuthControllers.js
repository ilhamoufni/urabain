const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email, password: password } });

    if (!user || !user.password == password) {
      res.status(401).json({
        message: "email or password not correct",
      });
    } else {
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRE_IN,
      });

      res.status(201).json({
        message: "success",
        token: token,
      });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};