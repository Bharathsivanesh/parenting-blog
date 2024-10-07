const userModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await userModel.create(newUser);
    res.json({
      message: "works",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.params;
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      res.json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};
