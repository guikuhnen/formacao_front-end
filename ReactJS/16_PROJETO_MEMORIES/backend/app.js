"use strict";

// Dependencies
const express = require("express");
const cors = require("cors");

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Database connection
const connectDB = require("./db/conn");

// Routes
const routes = require("./routes/router");
app.use("/memories", routes);

// Start the server
const port = 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}.`);
    });
  } catch (error) {
    console.error("Falha ao iniciar servidor sem conexao com o banco.", error);
    process.exit(1);
  }
};

startServer();
