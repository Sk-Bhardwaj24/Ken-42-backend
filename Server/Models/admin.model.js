const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = Schema({
  a_name: { type: String, required: true },
  a_email: { type: String, required: true, unique: true },
  a_password:{type:String,required:true},
  a_permission:{type:Boolean,default:false}
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
