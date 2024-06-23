const express = require("express");
const router = express.Router();
const upload = require("../conf/multer");
const picControll = require("../controllers/picControll");

router.post("/", upload.single("file"), picControll.create);


module.exports = router;
