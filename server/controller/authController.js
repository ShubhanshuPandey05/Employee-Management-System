import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import generateAndSetCookies from "../utils/generateTokens.js";
import Manager from "../models/managerModel.js";

export const signUp = async (req, res) => {
    try {
        const { Fullname, Email, Password, Dob, Gender, Salary } = req.body;
        let user = await User.findOne({ Email: Email });
        if (user) {
            console.log("sameUser")
            return res.status(400).json({ message: "Username already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(Password, salt);
        let newUser = new User({ Fullname, Email, Password: hashPassword, Dob, Gender, Salary });
        if(newUser){
            await newUser.save();
            let user = await User.findOne({ Email: Email });
            res.status(200).json({
                    _id: user._id,
                    fullName: user.Fullname,
                    userName: user.Email,
                    gender: user.Gender,
                    DateOfBirth: user.Dob,
                    Salary: user.Salary,
                })
        } else {
            res.status(500).json({ error: 'Invalid Employee Data' });
        }
    } catch (error) {
        console.log("Error in adding Employee", error);
        res.status(500).json({ error: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        let user = await Manager.findOne({ email: Email });
        if (!user) {
            res.status(500).json("No User Exist");
        }
        else {
            const isMatch = await bcrypt.compare(Password, user.password);
            // console.log(user.Password)
            if (isMatch) {
                const token = generateAndSetCookies(user._id);
                res.cookie("jwt", token);
                res.status(200).json({
                    name: user.name,
                    email: user.email,
                })
            }
            else {
                res.status(400).json("Password is incorrect");
            }
        }
    } catch (error) {
        console.log("Error in Login", error);
        res.status(500).json({ error: error.message });
    }
}

export const logOut = (req,res) => {
    try {
        res.cookie("jwt","",{ maxAge : 0 });
        res.status(200).json({
            message:"Logout Successfully"
        })
    } catch (error) {
        console.log(error.message,"error in logout");
        res.status(500).json({error:"internal Server Error"});
    }
}