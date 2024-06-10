import mongoose from "mongoose";

//creating userSchema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password:{
    type: String,
    required:true,
    minlength:6
  },
  gender:{
    type: String,
    required: true,
    enum:["male","female"]
  },
  profilePic:{
    type:String,
    default:""
  }


},
//createAt, UpdateAt
{timestamps:true});

// create Model

const User = mongoose.model('User', userSchema);

export default User;