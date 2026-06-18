"use strict";

const mongoose = require("mongoose");
const dns = require("node:dns/promises");

async function main() {
  try {
    // Erro local de DNS
    dns.setServers(["1.1.1.1"]);

    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://admin:7iVVAg9Sbv6qbsy@cluster0.en4iaaw.mongodb.net/?appName=Cluster0`,
    );

    console.log("Conexão com BD feita com sucesso!");
  } catch (error) {
    console.log(`Erro de conexão com BD: ${error}`);
  }
}

module.exports = main;
