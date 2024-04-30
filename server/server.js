const express = require("express");
const cors = require("cors");
const db_connect = require("./config/db_connect");
require("dotenv").config();
const app = express();

//connect to database
db_connect();
app.use(express.json()); // Set the limit for JSON payloads
//add cors
app.use(cors());

//our routes

app.use("/user", require("./routes/userRoute"));


//get port from .env
PORT = process.env.PORT;

//test our server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
//hazem
//eya
// /helooooooooooooooo