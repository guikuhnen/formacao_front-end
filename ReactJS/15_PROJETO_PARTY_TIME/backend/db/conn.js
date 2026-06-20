"use strict";

const mongoose = require("mongoose");
const dns = require("node:dns/promises");
require("dotenv").config();

async function main() {
  try {
    // Erro local de DNS
    dns.setServers(["1.1.1.1"]);

    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?appName=${process.env.APP_NAME}`,
    );

    console.log("Conexão com BD feita com sucesso!");
  } catch (error) {
    console.log(`Erro de conexão com BD: ${error}`);
  }
}

module.exports = main;
