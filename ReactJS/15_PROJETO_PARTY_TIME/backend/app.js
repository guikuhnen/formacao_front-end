"use strict";
// Dependencies
const express = require("express");
const cors = require("cors");

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
const conn = require("./db/conn");
conn();

// Routes
const routes = require("./routes/router");
app.use("/api", routes);

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});
