const express = require("express");
const {
  createblog,
  getAllBlogs,
  getuserblogs,
  deleteBlog,
} = require("../controllers/blogcontroller");
const router = express.Router();
router.route("/userblog").post(createblog);
router.route("/userblog").get(getAllBlogs);
router.route("/userblog/:email").get(getuserblogs);
router.route("/userblog/:id").delete(deleteBlog);
module.exports = router;
