const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const nodemailer = require("nodemailer");
const { registerRules, Validation, loginRules } = require("../middleware/auth-validator");
const isAuth = require("../middleware/passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "dhaouadieya765@gmail.com",
      pass: "shuf yphk sjvc hyet",
    },
  });
// ********************************** REGISTER *****************************
authRouter.post("/register", registerRules(), Validation, async (req, res) => {
    const { name, lastname, email, phone, password,role} = req.body;
    try {
      const newUser = new User(req.body);
      //check if email exist
      const searchedUser = await User.findOne({ email });
      if (searchedUser) {
        return res.status(400).send({ msg: "email already exist" });
      }
  
      //hash password
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(password, genSalt);
  
      // newUser.password = hashedPassword;
      // console.log(hashedPassword);
      newUser.password = hashedPassword;
      //creat verificationToken
      const activationToken = jwt.sign({ email }, process.env.SecretOrKey, {
        expiresIn: "1d",
      });
      //save user
      newUser.activationToken = activationToken;
  
      const result = await newUser.save();
      // Send verification email
      const verificationUrl = `http://localhost:3000/verify-account/${activationToken}`;
      const mailOptions = {
        from: "dhaouadieya765@gmail.com",
        to: email,
        subject: "Verify Account",
        html: `
        <div   width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
         color:black
        >
      
        <div
        style="
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          
        "
      >
        <img
          src="https://i.postimg.cc/fTm1hbKC/navbar-logo.png"
          alt="Your Alt Text"
          style="width: 150px; height: auto; margin: 0 auto"
        />
      </div>
        <
        
  <h4 style="width:100%;text-align:center;color: black">To verify your account, please click the following <br> <a style=""text-decoration: none; color: black" href="${verificationUrl}"
  ><button
    style="
      width: 100px;
      height: 40px;
      margin: 0 10px;
      color: white;
      border-radius: 30px;
      border: none;
      background-color: #0175CD;
    "
  >
    Link
  </button></a> to validate your account.
  
  
  
  
  .</h4>
      
      </div>
      
      
      
        `,
      };
      await transporter.sendMail(mailOptions);
      //************end Send verification email */
      //generate a token
      const payload = {
        _id: result._id,
        name: result.name,
      };
      require("dotenv").config();
      const token = await jwt.sign(payload, process.env.SecretOrKey, {
        expiresIn: 1000 * 60 * 60 * 24,
      });
      //**********
      res.send({
        user: result,
        msg: "user is saved",
        token: `Bearer ${token}`,
      });
    } catch (error) {
      res.send("can not save the user");
      console.log(error);
    }
  });

  //******************Create endpoint for verifying account***********************
  authRouter.post("/verify-account/:token", async (req, res) => {
    try {
      const { token } = req.params;
  
      // Find user by verification token
  
      const user = await User.findOne({
        activationToken: token,
        isActivated: false,
      });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid or expired verification token" });
      }
  
      // Verify user account
      user.isActivated = true;
      user.activationToken = undefined;
      await user.save();
  
      res.status(200).json({ message: "Account verified successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // ********************************** LOGIN *****************************
authRouter.post("/login", loginRules(), Validation, async (req, res) => {
    const { email, password } = req.body;
    try {
      //fin of the user exist
      const searchedUser = await User.findOne({ email });
      //if the email not exist
      if (!searchedUser) {
        return res.status(400).send({ msg: "bad credential" });
      }
      //password are
      const match = await bcrypt.compare(password, searchedUser.password);
  
      if (!match) {
        return res.status(400).send({ msg: "bad credential" });
      }
      //cree un token
      const payload = {
        _id: searchedUser.id,
        name: searchedUser.name,
      };
      const token = await jwt.sign(payload, process.env.SecretOrKey, {
        expiresIn: 1000 * 3600 * 24,
      });
      console.log(token);
      //send the user
      res
        .status(200)
        .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
    } catch (error) {
      res.send({ msg: "can not get th user" });
    }
  });


  authRouter.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      }
  
      // Generate a unique reset token
      const resetToken = jwt.sign({ userId: user._id }, "your_secret_key", {
        expiresIn: "1h",
      });
  
      // Update user's reset token and expiration time
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();
  
      // Send email to the user with the reset link containing the token
      const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
      const mailOptions = {
        from: "dhaouadieya765@gmail.com",
        to: email,
        subject: "Reset Password",
  
        html: `
        <div   width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
         color:black
        >
      
        <div
        style="
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          
        "
      >
        <img
          src="https://i.postimg.cc/fTm1hbKC/navbar-logo.png"
          alt="Your Alt Text"
          style="width: 150px; height: auto; margin: 0 auto"
        />
      </div>
        <h3 style="width:100%;text-align:center;color: black">You requested for password reset</h3>
        
  <h4 style="width:100%;text-align:center;color: black">Click on this <a style=""text-decoration: none; color: black" href="${resetUrl}"
  ><button
    style="
      width: 100px;
      height: 40px;
      margin: 0 10px;
      color: white;
      border-radius: 30px;
      border: none;
      background-color: #0175CD;
    "
  >
    Link
  </button></a> to reset password.</h4>
      
      </div>
      
      
      
        `,
      };
  
      await transporter.sendMail(mailOptions);
      res.send({ msg: "Password reset email sent" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  });
  authRouter.post("/reset-password/:token", async (req, res) => {
    try {
      const { token } = req.params;
      const { password } = req.body;
  
      // Find user by reset token and ensure it hasn't expired
      const user = await User.findOne({
        resetPasswordToken: token,
      });
  
      // If user not found or token expired
      if (!user) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
  
      // Reset password
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(password, genSalt);
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
  
      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
// ****************** current user **********************
  authRouter.get("/current", isAuth(), (req, res) => {
    res.status(200).send({ user: req.user });
  });

module.exports = authRouter;
