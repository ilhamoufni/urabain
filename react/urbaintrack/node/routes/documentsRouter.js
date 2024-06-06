const express = require("express");
const router = express.Router();
const {
  createDocument,
  findDocument,
  updateDocument,
  deleteDocument,
} = require("../controllers/DocumentControllers");
const { verifyLogin } = require("../middlewares/adminmiddle");
const verifyJwt = require("../middlewares/verifyJwt");

router.post("/createDocument", verifyLogin, createDocument);

router.get("/getDocuments", verifyJwt ,findDocument);
router.put("/updateDocument/:id", updateDocument);
router.delete("/deleteDocument/:id", deleteDocument);

module.exports = router;
