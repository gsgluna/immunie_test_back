const express = require('express');
const app = express();
const router = express.Router();

require("dotenv").config();
require("./db");

const port = 5173;

const pictureRouter = require("./routes/picture");
app.use("/pictures", pictureRouter);

app.use('/',router);
app.listen(port);
console.log("Servidor OK!...");

