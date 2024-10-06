const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;