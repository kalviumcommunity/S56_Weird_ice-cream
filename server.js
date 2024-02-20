const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PUBLIC_PORT;

// define the ping route
app.get("/",(req , res )=>{res.send("This is the first route page")})
app.get("/ping",(req , res )=>{res.send("pong")})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;