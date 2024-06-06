const asyncHandler = require("express-async-handler");
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const dotenv = require("dotenv").config();

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({
      message: "Email and password are required",
    });
  }

  const foundUser = await User.findOne({
    where: { email, password },
  });

  if (!foundUser) {
    return res.status(401).json({
      message: "Check your credentails",
    });
  }

  // create access token
  const accessToken = jwt.sign(
    {
      user: {
        email: foundUser.email,
        name: foundUser.name,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );

  // create refresh token
  const refreshToken = jwt.sign(
    {
      email: foundUser.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  res.json({
    user: foundUser,
    access_token: accessToken,
    refreshToken: refreshToken,
  });
});

module.exports = {
  signIn,
};

// exports.signIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({
//       where: { email: email, password: password },
//     });

//     if (!user) {
//       res.status(404).json({
//         message: "email or password not correct",
//       });
//     }

//     const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//       expiresIn: process.env.EXPIRE_IN,
//     });

//     res.status(201).json({
//       message: "success",
//       token: token,
//     });
//   } catch (error) {
//     res.status(401).send(error);
//   }
// };
