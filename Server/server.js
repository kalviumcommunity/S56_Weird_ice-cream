const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongodb = require("./Config/db");
const route = require("./route")


// define the ping route
app.get("/",(req , res )=>{res.send("This is the first route page")})
app.get("/ping",(req , res )=>{res.send("pong")})
app.use(route)

const connectToDB = async () => {
  try {
    //  Your code goes here
    await mongoose.connect(mongodb.mongoURI)
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('❌ error connecting to mongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    //  Your code goes here
    await mongoose.disconnect()
    console.log('📦 disconnected from mongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from mongoDB:', err.message);
  }
};



if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app;
module.exports = {
  connectToDB,
  disconnectFromDB,
  mongooseConnection: mongoose.connection,
};