import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username:{
        type : String,
    },
    type : {
        type : String, // employee, employer 
    },
    firstname: {
        type : String,
        required : true
    },
    lastname: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true,
    },
    skills : {
        type : []
    },
    education : {
        type : []
    },
    certifications :{
        type : []
    },
    social : { // social profiles links
        type : []
    },
    cv_link : {
        type : String
    }
}, { timestamps:true })

const user = mongoose.model('user', userSchema)
export default user