import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import config from '../../config.js'
import User from '../../models/user.js'
import jwt from 'jsonwebtoken'
import fetchuser from '../../middlewares/fetchuser.js'

const authRoute = Router()
const JWT_SECRET = config.JWT_SECRET //SECRET

// ROUTE 1: LOGIN POST REQ
authRoute.post('/login', [
    body('email', 'Please provide a valid email.').isLength({min:5}).isEmail(),
    body('password', 'Please provode a valid password.').isLength({min:5}),
], async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, error: errors.array()})
    }
    const { email , password } = req.body
    try {
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({success:false, error: "Please Login with correct credentials"});
        }
        const passComp = await bcrypt.compare(password, user.password);
        if(!passComp){
            return res.status(400).json({success:true,error: "Please Login with correct credentials"});
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({success:true, authtoken:authtoken, data:data}); 
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error : "Internal Server Error"});
    }
})

// ROUTE 2: SIGNUP POST REQ
authRoute.post('/signup', [
    body('email', 'Please provide a valid email.').isLength({min:5}).isEmail(),
    body('firstname', 'Please provide a valid firstname.').isLength({min:2}),
    body('lastname', 'Please provide a valid lastname.').isLength({min:2}),
    body('password', 'Please provode a valid password.').isLength({min:5}),
], async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, error: errors.array()})
    }
    const { email, firstname, lastname, password} = req.body
    try {
        const userWemail = await User.findOne({email:email})
        if(userWemail){
            return res.status(400).json({success:false,error: "Sorry a user with this email already exist."})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
         //creating a new user
        const newuser = await User.create({
            email: email,
            firstname: firstname,
            lastname: lastname,
            password : secPass,
        })

        const data = {
            user: {
                id: newuser.id
            }
        }
        //giving authtoken
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({success:true, authtoken:authtoken})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error : "Internal Server Error"})
    }
})

export default authRoute;