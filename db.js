const mongoose = require("mongoose");

require("dotenv").config();
require("./db");

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.nd6nvc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log("Conectado ao MongoDB com sucesso!");
}

module.exports = main;
