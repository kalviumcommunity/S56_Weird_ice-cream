const mongoose = require("mongoose");
const joi = require("joi")

const icecreamSchema = new mongoose.Schema({
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
    },
    user:{
        type:String
    }
});

const userSchema = new mongoose.Schema({
    user:{
        type: String
    }
})


const validateIcecreams = (icecream)=>{
    const schema = joi.object({
    name: joi.string().required(),
    categories:joi.string().required(),
    types:joi.string().required(),
    description:joi.string().required(),
    organic:joi.string().required(),
    main_ingredients:joi.string().required(),
    img:joi.string().required(),
    user:joi.string().required()
    })
    return schema.validate(icecream)
}

const userModel = mongoose.model("users",userSchema)
const WeirdIce = mongoose.model("icecreams", icecreamSchema);


module.exports =  {WeirdIce,validateIcecreams,userModel} ;
