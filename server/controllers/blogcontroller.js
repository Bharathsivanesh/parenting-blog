const blogmodel = require("../models/blogmodel");
exports.createblog = async (req, res) => {
  try {
    const newblog = req.body;
    const blog = await blogmodel.create(newblog);
    res.json({
      message: "works",
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogmodel.find();
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

exports.getuserblogs = async (req, res) => {
  try {
    const { email } = req.params;
    const blogs = await blogmodel.find({ mail: email });
    if (blogs.length > 0) {
      res.json({ blogs });
    } else {
      res.status(404).json({ message: "user no post yet" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};
