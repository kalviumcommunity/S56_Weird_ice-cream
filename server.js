const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT;
const mongoose = require('mongoose');
const mongodb = require("./config");

// define the ping route
app.get("/",(req , res )=>{res.send("This is the first route page")})
app.get("/ping",(req , res )=>{res.send("pong")})

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
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
module.exports = {
  connectToDB,
  disconnectFromDB,
  mongooseConnection: mongoose.connection,
};