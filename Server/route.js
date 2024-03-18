const express = require('express');
const { WeirdIce,userModel } = require('./model/users');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/get', (req, res) => {
    res.send("It is a get request");
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req.body);

    try {
        await WeirdIce.findByIdAndUpdate({ _id: id }, req.body);
        console.log("updated successfully");
        res.send("Updated Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/auth", (req, res) => {
    console.log(req.body)
    const { username } = req.body;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.Access_Token);
    userModel.create({user:username})
    
    
    res.json({ accessToken: accessToken });
});



router.patch('/patch', (req, res) => {
    res.send("It is a patch request");
});

router.delete('/deleteuser/:id', (req, res) => {
    const { id } = req.params;
    WeirdIce.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
