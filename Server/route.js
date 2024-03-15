const express = require ('express')
const {WeirdIce} = require('./model/users')
const router = express.Router()
router.get('/get',(req,res)=>{
    res.send("It is a get request")
})
router.put('/update/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(req.body)

    try{
        WeirdIce.findByIdAndUpdate({_id:id},req.body)
        .then((res)=>{
            console.log("updated successfully",res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.error(err)
    }
})
router.patch('/patch',(req,res)=>{
    res.send("It is a patch request")
})

router.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id;
    WeirdIce.findByIdAndDelete({_id:id})
    .then (result => res.json(result))
    .catch (err => res.json(err))
})
module.exports = router