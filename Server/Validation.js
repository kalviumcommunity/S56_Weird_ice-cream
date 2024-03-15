const Joi = require("joi");

const validator = (schema) =>(payLoad) =>{
    return schema.validator(payLoad);
}

const weridice = Joi.object({
    name: Joi.string().required(),
    categories:Joi.string().required(),
    types:Joi.string().required(),
    description:Joi.string().required(),
    organic:Joi.string().required(),
    main_ingredients:Joi.string().required(),
    img:Joi.string().required()
})
const validateData = validator(weridice)


module.exports = weridice;