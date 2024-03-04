const mongoose = require("mongoose");
require("dotenv").config();

const connected = async () => { 
  try {
    await mongoose.connect(process.env.URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
};

module.exports = {
  isConnected,
  connected,
};
