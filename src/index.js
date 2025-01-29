// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({
    path: './env'
})

connectDB()





// This is the first approach to connect to the database another approach is to write the connection logic in another file and executing that file here
/*
import express from 'express'
const app=express();

//this format is known as IIFE(Immediately Invoked Function Expression)
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR : ",error);
            throw error;    
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error :", error);
        throw error
    }
})()

*/