const userModel = require('../models/userModel')

exports.createUser = async(req,res) => {
    try {
        const newUser = req.body;
        const user = await userModel.create(newUser);
        res.json({
            message: "works",
            user
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getUser = async(req,res) => {
    try {
        const user = await userModel.find({email:req.params.email,password:req.params.password})
        res.json({
            user
        })
    } catch (error) {
        console.log(error)       
    }
}