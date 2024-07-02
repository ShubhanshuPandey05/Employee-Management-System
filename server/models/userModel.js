import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        minLength:6
    },
    Dob:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    Salary:{
        type:String,
        required:true
    }
},{timestamps: true})
const User = mongoose.model("employees",userSchema);

export default User;