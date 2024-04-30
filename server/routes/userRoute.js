const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

//add new user
userRouter.post("/add", async (req, res) => {
  try {
    let newUser = new User(req.body);
    const result = await newUser.save();
    res.send({ result: result, msg: "user added" });
  } catch (error) {
    console.log(error);
  }
});

//get all users
userRouter.get("/all", async (req, res) => {
  try {
    let result = await User.find();
    res.send({
      users: result,
      msg: "all users",
    });
  } catch (error) {
    console.log(error);
  }
});

//get user by id
userRouter.get("/find/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({
      users: result,
      msg: "this is the user back by id",
    });
  } catch (error) {
    console.log(error);
  }
});

//update user by id

userRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ newUser: result, msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});

//delete user
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: "user is delete" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
