const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    categories:String,
    types:String,
    description:String,
    organic:Boolean,
    main_ingredients:Array,
    img:String
});

// Define the model
const WeirdIce = mongoose.model("icecreams", userSchema);

// Export the model
module.exports =  WeirdIce ;
