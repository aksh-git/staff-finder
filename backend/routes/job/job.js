import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import config from '../../config.js'
import User from '../../models/user.js'
import Job from '../../models/job.js'
import jwt from 'jsonwebtoken'
import fetchuser from '../../middlewares/fetchuser.js'

const jobRoute = Router()

jobRoute.post('/postNewJob', fetchuser, [
    body('title','Please provide the title for the job.').isLength({min:10}),
    body('type','Please provide the type of the job.').isLength({min:5}),
    body('title','Please give the title of the job.').isLength({min:10})
], async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, error: errors.array()})
    }
    const user = req.user
    const { title , type } = req.body
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error : "Internal Server Error"});
    }
})

jobRoute.get('/getJobByID/:job_id', async (req, res)=>{
    try {
        var jobId = req.params.job_id;
        const job = await Job.findById(jobId)
        if(job){
            res.status(200).send({success:true, data:job});
        }else{
            res.status(200).send({success:false, data:{}});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error:"Internal Server Error"});
    }
})

jobRoute.post('/getJobs', fetchuser, async(req, res)=>{
    const filter = req.body.filter
    try {
        const job = await Job.find()
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error:"Internal Server Error"});
    }
})

export default jobRoute