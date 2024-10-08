const express = require("express");
const {
  createblog,
  getAllBlogs,
  getuserblogs,
} = require("../controllers/blogcontroller");
const router = express.Router();
router.route("/userblog").post(createblog);
router.route("/userblog").get(getAllBlogs);
router.route("/userblog/:email").get(getuserblogs);
module.exports = router;
