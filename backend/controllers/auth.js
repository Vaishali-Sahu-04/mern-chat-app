import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async(req, res)=>{
    
    try {
        const {fullName,username,password,cnfrmPassword,gender} = req.body;
        if(password !== cnfrmPassword) 
        return res.status(400).json({error:"Password don't match"})

        const user = await User.findOne({username});

        if(user) 
        return res.status(400).json({error:"Username already exists"})

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //avatar-placeholder.iran.liara.run/
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic:gender === "male" ? boyProfile : girlProfile,
        })
        if(newUser){
            //Generate JWT tooken
             generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic,
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"})
        }
        
    } catch (error) {
        console.log("Error in Signup controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const login = async(req, res)=>{
    
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPassCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPassCorrect) 
        return res.status(400).json({error:"Invalid username or password"})
       
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        })
    } catch (error) {
        console.log("Error in Login controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const logout = (req, res)=>{
    try {
        res.cookie("jwt","")
        res.status(200).json({message:"Logged out Successfully"})
    } catch (error) {
        console.log("Error in Logout controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}