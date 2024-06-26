const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.checkUserRole = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }
  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "user") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "user") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};

exports.createAccount = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.updateAccount = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.deactivateAccount = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.showInformationUser = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if ((!payload.role == "admin", "chef de département")) {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if ((payload.role == "admin", "chef de département")) {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.checkAdminRole = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.verifyLogin = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).send("Acess Denied");
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.json({ success: false, message: "Failed to authenticate token " });
    } else {
      req.user = user;
      next();
    }
  });
};
exports.addDocument = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.updateDocument = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if ((!payload.role == "admin", "utilisateurs")) {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if ((payload.role == "admin", "utilisateurs")) {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.showDocument = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if ((!payload.role == "admin", "chef de département", "utilisateurs")) {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (
      (payload.role == "admin", "chef de département", "utilisateurs")
    ) {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.deleteDocument = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if (!payload.role == "admin") {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (payload.role == "admin") {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
exports.okUpdatDpcument = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "you dont have access to this service",
    });
  }

  try {
    console.log("message");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log("payaload", payload);
    if ((!payload.role == "admin", "chef de département", "utilisateurs")) {
      res.status(400).json({
        message: "you dont have access to this data",
      });
    } else if (
      (payload.role == "admin", "chef de département", "utilisateurs")
    ) {
      next();
    }
  } catch (error) {
    res.send(error);
  }
};
