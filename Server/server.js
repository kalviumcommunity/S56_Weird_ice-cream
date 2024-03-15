const express = require('express');
const {WeirdIce,validateIcecreams} = require("./model/users.js")
const cors = require("cors")
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongoose = require('mongoose');
const {isConnected,connected,} = require("./Config/db");
const route = require("./route")
const joi = require("joi")

app.use(express.json())
app.use(cors())
connected()
app.get("/",(req , res )=>{
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

app.post("/post", async (req, res) => {
  console.log(req.body)
  const validation = validateIcecreams(req.body);
  if (validation.error) {
    return res.status(500).json({ error: validation.error.details[0].message });
  }
  try {
    await WeirdIce.create(req.body).then((el) => {
      res.json(el);
    }); 
  } catch (error) {
    console.log(error);
  }
});





app.use(route)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

