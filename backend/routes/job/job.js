import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import config from '../../config.js'
import Job from '../../models/job.js'
import fetchuser from '../../middlewares/fetchuser.js'

const jobRoute = Router()

jobRoute.post('/postNewJob', fetchuser, [
    body('title','Please provide the title for the job.').isLength({min:10}),
    body('type','Please provide the type of the job.').isLength({min:5}),
    body('location','Please provide the location of the job.').isLength({min:5}),
    body('description','Please give the description of the job.').isLength({min:10}),
    body('role','Please give the role of the job.').isLength({min:4}),
    body('contact_email','Please give the contact email of the job.').isLength({min:10}).isEmail(),
], async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, error: errors.array()})
    }
    const user = req.user
    const { title , type , description, location, role, contact_email } = req.body
    try {
        const jobData = {
            title : title,
            description : description,
            location : location,
            type : type,
            role : role,
            contact_email : contact_email,
            contact_phone : req.body.contact_phone ? req.body.contact_phone : '',
            note : req.body.note ? req.body.note : '',
            extra_note : req.body.extra_note ? req.body.extra_note : '', 
            keywords : req.body.keywords ? req.body.keywords : '',
            posted_by : user.id
        }
        const job = await Job.create(jobData)
        res.status(200).json({success:true, data:job})
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
    //const filter = req.body.filter
    try {
        const jobs = await Job.find({})
        if(jobs){
            return res.status(200).json({success:true, data:jobs})
        }else{
            return res.status(200).json({success:false, data:{}})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, error:"Internal Server Error"});
    }
})

export default jobRoute