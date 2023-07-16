const UserSchema = require("../models/UserSchema");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validations
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required!" });
    }

    const user = await UserSchema.create({ name, email, password });

    if (user) {
      res.status(201).json({
        success: true,
        message: "user created successfully!",
        user,
      });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserSchema.find().select("-password");
    if (user) {
      res.status(200).json({
        success: true,
        message: "Users",
        user,
      });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = { createUser, getUser };
