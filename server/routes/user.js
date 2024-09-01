import express from 'express'
import bcrypt from 'bcrypt'
import {User} from'../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const router = express.Router();
router.post('/signup',async(req,res)=>{
    const{username,email,password,role} = req.body;
    const user = await User.findOne({email})
    if(user){
        return res.json({message:"user already existed"})
    }
    const hashpassword = await bcrypt.hash(password,10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,
        role,
    })

    await newUser.save()
    return res.json({status:true, message: "record registerd"})
})

router.post('/login',async (req,res)=>{
   const {email,password,role} = req.body;
   const user = await User.findOne({email})
   if(!user){
    return res.json({messsage : "user is not registred"})
   }
   const validPassword = await bcrypt.compare(password,user.password)
   if(!validPassword){
      return res.json({message: "Password is incorrect"})
   }

    if (role !== user.role) {
        return res.json({ message: "Role is incorrect" });
    }

   const token = jwt.sign({username: user.username},process.env.KEY,{expiresIn: '1h'})
   res.cookie('token',token,{httpOnly:true,maxAge: 360000})
   return res.json({status:true, message:"login successfully"})
})

router.post('/forgot-password',async (req,res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "User not registerd"})
        }
        const token = jwt.sign({id: user._id}, process.env.KEY,{expiresIn: '5m'})
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'honeyuppala2003@gmail.com',
            pass: 'bxuh ectk wrfs xpkv'
        }
        });

        var mailOptions = {
        from: 'honeyuppala2003@gmail.com',
        to: email ,
        subject: 'Reset Password',
        text: `http://localhost:5173/resetPassword/${token}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return res.json({message: "error sending email"})
        } else {
            return res.json({status : true , message: "email sent"});
        }
        });
    }
    catch(err){
        console.log(err)
    }
})

router.post('/reset-password/:token',async (req,res)=>{
   const {token} = req.params;
   const {password} = req.body 
   try{
    const decoded = await jwt.verify(token,process.env.KEY);
    const id = decoded.id;
    const hashpassword = await bcrypt.hash(password,10)
    await User.findByIdAndUpdate({_id:id},{password:hashpassword})
    return res.json({status: true, message:"Password Updated successfully"})
   }
   catch(err){
    return res.json("invalid token")
   }
})

const verifyUser = async (req,res,next)=>{
    try{
    const token = req.cookies.token;
    if(!token){
        return res.json({status: false,message:"no token"})
    }
    const decoded = jwt.verify(token,process.env.KEY);
    next()
    }catch(err){
    return res.json(err);
    }
};

router.get('/verify',verifyUser,(req,res)=>{
    return res.json({status: true,message: "authorized"})
});

router.get('/logout',(req,res) =>{
    res.clearCookie('token')
    return res.json({status: true})
})

router.get('/userprofile',(req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

export {router as UserRouter}