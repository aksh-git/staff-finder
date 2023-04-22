import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import config from '../../config.js'
import User from '../../models/user.js'
import jwt from 'jsonwebtoken'
import fetchuser from '../../middlewares/fetchuser.js'

const userRoute = Router()

// ROUTE 1: Get User Details by ID : Login required
userRoute.post('/getUserByID', fetchuser, async (req, res)=>{
    try {
        var userId = req.body.id;
        const user = await User.findById(userId).select("-password");
        if(user){
            res.status(200).json({success:true,data:user});
        }else{
            res.status(200).json({success:false,data:{}});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, error:"Internal Server Error"});
    }
})
userRoute.post('/getLoggedUser', fetchuser, async (req, res)=>{
    try {
        var userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        if(user){
            res.status(200).json({success:true,data:user});
        }else{
            res.status(200).json({success:false,data:{}});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, error:"Internal Server Error"});
    }
})

export default userRoute;