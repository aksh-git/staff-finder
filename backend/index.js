import express from 'express'
import authRoute from './routes/auth/auth.js'
import jobRoute from './routes/job/job.js'
import userRoute from './routes/user/user.js'
import connectToDatabase from './db.js'
import cors from 'cors'

const PORT = 8080;

const app = express()

app.use(express.urlencoded({ extended: true })); // getting URL encodings
app.use(express.json());   
app.use(cors())
// connecting database
connectToDatabase()
//API Routes
app.use('/api/auth', authRoute)
app.use('/api/job', jobRoute)
app.use('/api/user', userRoute)
// 404 handler
app.use('*',(req, res, next) => {
    res.send("Welcome to STAFF-FINDER");
});

app.listen(PORT, ()=>{
    console.log('[STAFF-FINDER] backend listening on port :',PORT);
})

