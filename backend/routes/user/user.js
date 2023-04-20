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
            res.status(200).send({success:true,data:user});
        }else{
            res.status(200).send({success:false,data:{}});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error:"Internal Server Error"});
    }
})
