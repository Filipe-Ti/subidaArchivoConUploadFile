const { Router } = require('express');
const { formController, uploadFile } = require('../controllers/form');

const router = Router();

router.get("/", formController); 

router.post("/uploadFile", uploadFile);

module.exports = router;