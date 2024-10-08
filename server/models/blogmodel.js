const mongoose = require("mongoose");
const userblogschema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },

  content: {
    required: true,
    type: String,
  },
  mail: {
    required: true,
    type: String,
  },
  image:{
    required:true,
    type:String
  }
});
const blogmodel = mongoose.model("userblog", userblogschema);
module.exports = blogmodel;
