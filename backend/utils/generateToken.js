import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET)

    res.cookie("jwt",token,{
        httpOnly: true,        //prevent XSS attacks cross-site scripting attacks
        sameSite:"strict",     //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokenAndSetCookie;