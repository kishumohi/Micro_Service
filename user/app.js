const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const connect = require("./db/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connect();

// routess
app.use("/", userRoutes);

module.exports = app;
