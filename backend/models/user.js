import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username:{
        type : String,
    },
    type : {
        type : Number, // employee : 1, employer : 2
        defaut : 1
    },
    firstname: {
        type : String,
        required : true
    },
    lastname: {
        type : String,
        required : true
    },
    dob : {
        type : Date
    },
    location : {
        type : String
    },
    avatar : {
        type : String
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    bio : {
        type : String,
        default : 'Hey there! Welcome to my protfolio.'
    },
    password:{
        type: String,
        required : true,
    },
    projects : {
        type : []
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
        type : String,
    },
    // -----------------
    boost : {
        type : Number,
        default : 0,
    },
    reputation : {
        type : Number,
        default : 5 // max : 10 min : 0
    }
}, { timestamps:true })

const user = mongoose.model('user', userSchema)
export default user