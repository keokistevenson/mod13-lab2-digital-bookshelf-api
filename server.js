// DEPENDENCIES
const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;




// MIDDLEWARE
app.use(express.json());  // Necessary to automatically parse JSON into JavaScript object and place it in req.body

// ROUTES
app.get("/", (req, res)=>{
    res.send("Server is connected.");
})

// PORT
app.listen(port, (req, res)=>{
    console.log(`Server is connect on port http://localhost:${port}.`);
})