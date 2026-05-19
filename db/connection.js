// DEPENDENCIES
require("dotenv").config();
const mongoose = require("mongoose");

// DATABASE
mongoose.connect(process.env.DATABASE_URI);

const db = mongoose.connection;
db.on("error", (err)=> console.log(err.message + " is mongo not running?"));
db.on("connected", ()=> console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected."));

