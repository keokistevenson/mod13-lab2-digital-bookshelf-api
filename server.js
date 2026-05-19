// DEPENDENCIES
const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

const bookRoutes = require("./routes/bookRoutes");

// MIDDLEWARE
app.use(express.json());  // Necessary to automatically parse JSON into JavaScript object and place it in req.body

// DATABASE
const connectDB = require("./db/connection");
connectDB;



// ROUTES

app.use("/api/books", bookRoutes)
app.get("/", (req, res)=>{
    res.send("Server is connected.");
})

// PORT
app.listen(port, ()=>{
    console.log(`Server is connected on port http://localhost:${port}.`);
})