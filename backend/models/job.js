import mongoose, { Schema } from 'mongoose'

const jobSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    type : {
        type : String,
        require : true
    },
    role : {
        type : String,
    },
    contact_email : {
        type : String,
    },
    contact_phone : {
        type : Schema.Types.Number
    },
    contact_other : {
        type : String,
    },
    note : {
        type : String
    },
    extra_note : {
        type : String
    },
    keywords : {
        type : []
    },
    posted_by : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
}, {timestamps : true})

const Job = mongoose.model('job', jobSchema)
export default Job