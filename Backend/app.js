
const express = require('express');
const app = express();
const cors = require('cors');
const AppointmentRouter = require('./Routes/AppointmentRoutes')

app.use(express.json()); // JSON Middleware 

app.use(cors({
    origin : "*"
}));

app.use('/api/v1/Appointments', AppointmentRouter); 

app.all("*",(req,res,next)=>{
    res.status(400).json({
        status : "Fail",
        message : "Invalid request"

    })
    next();
})
module.exports = app;