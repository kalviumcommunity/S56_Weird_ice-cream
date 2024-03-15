const express = require('express');
const WeirdIce = require("./model/users.js")
const cors = require("cors")
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongoose = require('mongoose');
const {isConnected,connected,} = require("./Config/db");
const route = require("./route");
const weridice = require('./Validation.js');

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

app.post("/post", async (req, res) => {
  const {error} = validateData(req.body);
  console.log(error);
  if(error){
    return res
    .status(400)
    .json({
      error:"Invalid data given",
      message:"Invalid"
    })
  }
  weridice.create(req.body)
  .then((data)=>{
    res.json(data);
  })
  .catch((err)=>{
    res.json(err);
  })

  // try {
  //   console.log(req.body)
  //   const newdata = req.body;
  //   await WeirdIce.create(newdata).then((el)=>{
  //     res.json(el)
  //   }); 
  // } catch (error) {
  //   console.log('error found', error);
  // }
});




app.use(route)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

