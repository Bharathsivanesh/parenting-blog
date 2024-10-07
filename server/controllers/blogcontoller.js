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
