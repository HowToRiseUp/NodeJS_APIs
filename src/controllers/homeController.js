const connection = require("../config/database");
const User = require("../models/User");

const getHomePage = async (req, res) => {
  const newUser = await User.find();
  return res.status(200).json({
    error: 0,
    data: newUser
  })
};
const deleteUserAPI = async (req, res) => {
  const userId = req.body.id;
  const deletedUser = await User.findOneAndDelete({ _id: userId });
  return res.status(200).json({
    error: 0,
    user: deletedUser
  });
};


const UpdateUserAPI = async (req, res) => {
  const { id, email, name, city } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { email, name, city }, // Dữ liệu cập nhật
    { new: true }
  );

  return res.status(200).json({
    error: 0,
    data: updatedUser
  })
};

const createUser = async (req, res) => {
  const { email, name, city } = req.body;
  const newUser = await User.create({ email, name, city });
  return res.status(201).json({
    error: 0,
    data: newUser
  });
};

module.exports = { getHomePage, createUser, UpdateUserAPI, deleteUserAPI };
