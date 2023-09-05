import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import {fileURLToPath} from 'url';
import connect from "./CDB/db.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3001;

dotenv.config();


// const connect = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("db is connect")
//     } catch (error) {
//         console.log(error)
//     }
// }

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');


// return static pages from the "./public" directory
app.use(express.static(__dirname+"/public"))

import BookingRouter from './Router/Booking.js';
app.use('/',BookingRouter);



app.listen(port, ()=>{
    connect();
    console.log("Server is running on port "+ port + "...");
})