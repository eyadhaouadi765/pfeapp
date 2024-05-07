const express = require("express");
const cors = require("cors");
const db_connect = require("./config/db_connect");
require("dotenv").config();
const User = require('./models/user')
const app = express();

//connect to database
db_connect();
app.use(express.json()); // Set the limit for JSON payloads
//add cors
app.use(cors());

//our routes

app.use("/user", require("./routes/userRoute"));

app.post('/signup',(req,res)=>{
  User.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

//get port from .env
PORT = process.env.PORT;

//test our server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
