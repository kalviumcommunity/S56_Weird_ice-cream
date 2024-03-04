const express = require('express');
const WeirdIce = require("./model/users.js")
const cors = require("cors")
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongoose = require('mongoose');
const {isConnected,connected,} = require("./Config/db");
const route = require("./route")

app.use(express.json())
app.use(cors())
connected()
// define the ping route
app.get("/",(req , res )=>{
  // res.send("This is the first route page")
  res.json({"Database Connection" : isConnected()?"Connected" : "Not Connected"})
})
app.get("/ping",(req , res )=>{res.send("pong")})

app.get("/data", async (req, res) => {
  try {
    let ans = await WeirdIce.find({});
    res.json(ans);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});




app.use(route)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

