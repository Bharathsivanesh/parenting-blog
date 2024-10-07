const express = require("express");
const { createblog } = require("../controllers/blogController");
const router = express.Router();
router.route("/userblog").post(createblog);
module.exports = router;
