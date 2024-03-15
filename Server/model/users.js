const mongoose = require("mongoose");
const joi = require("joi")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    types:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    organic:{
        type:String,
        required:true
    },
    main_ingredients:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
});

const validateIcecreams = (icecream)=>{
    const schema = joi.object({
    name: joi.string().required(),
    categories:joi.string().required(),
    types:joi.string().required(),
    description:joi.string().required(),
    organic:joi.string().required(),
    main_ingredients:joi.string().required(),
    img:joi.string().required()
    })
    return schema.validate(icecream)
}
const WeirdIce = mongoose.model("icecreams", userSchema);

module.exports =  {WeirdIce,validateIcecreams} ;
