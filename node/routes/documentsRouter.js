const express = require('express');
const router = express.Router();
const {createDocument , findDocument, updateDocument, deleteDocument} = require("../controllers/DocumentController");
const {verifyLogin} = require('../middlewares/RoleMiddleware');


router.post('/createDocument',verifyLogin, createDocument);
router.get('/getDocument' ,verifyLogin, findDocument);
router.put('/updateDocument/:id' ,updateDocument);
router.delete('/deleteDocument/:id' ,deleteDocument);





module.exports = router;