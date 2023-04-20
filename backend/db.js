import mongoose from 'mongoose';
import config from '../config.js';

let isConnected = false;

function connectToDatabase(){
    if(isConnected) return
    // settings
    mongoose.set('strictQuery', true);
    if(config.DEBUG) mongoose.set('debug', true);
    // making connection 
    mongoose.connect(config.MONGO_URI, { keepAlive: true, keepAliveInitialDelay: 300000 })

    mongoose.connection.on('connected', conn=>{
        isConnected = true;
        console.log("[STAFF-FINDER] Connected to MongoDB.\n");
    });
    // handling connection error
    mongoose.connection.on('error', err => {
        console.log("[MongoDB Connection ERROR]", err);
        isConnected=false;
    });
}

export default connectToDatabase;