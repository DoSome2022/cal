import { MongoClient, ObjectId } from "mongodb"
import Booking from "../models/Booking.js"
import dotenv from "dotenv";
import { query } from "express";


dotenv.config();


const client = new MongoClient(process.env.MONGO)
const database = client.db("BookingCheduler");
const coll = database.collection("bookings");


export const TestData = async (req,res) =>{
        try {
    coll.insertOne({
        text: "test event A",
        start_date: new Date(2023,9,1),
        end_date: new Date(2023,9,4)
    });
    coll.insertOne({
        text: "test event B",
        start_date: new Date(2023,9,10),
        end_date: new Date(2023,9,15)
    })

    res.send("Test data add to DB")
    } catch (error) {
        console.log(error)
    }



}

export const GetDatas = async (req,res) =>{

   

         coll.find().toArray(function(err,data){
            if(err) throw err
            console.log("data : ",data)
        for(var i = 0; i < data.length; i++ ){
            data[i].id = data[i]._id;
        
        res.send(data);

        }
    })
       const getdatas = await Booking.find();
     res.send(getdatas)
   
   
    
}

export const PostDatas = async (req,res) => {
    const data = req.body
   // console.log(Date.now())
    try {
        const newDatas = new Booking({
            
            start_date: data.start_date,
            end_date: data.end_date,
            text: data.text,
            id:  Date.now()
        })

         console.log(newDatas)
        
        const saveDatas = newDatas.save()

        

        const getdatas = await Booking.find();
        res.send(getdatas)

    } catch (error) {
        console.log(error)
    }

}

export const DelDatas =  async (req,res) =>{
    console.log("params id: ",req.params.id)
const id = req.params.id ;
    console.log(id)

    try {
    
      const booking =  await Booking.findOne({id:req.params.id})

        await coll .deleteOne()

        


    //   }
    } catch (error) {
        console.log(error)
    }
    
    
    
}

export const  GetHomePage = (req,res)=>{
    res.render('home')
}

export const GetAboutPage = (req,res)=>{
    res.render('about')
}

export const GetFunding = (req,res)=>{
    res.render('funding')
}

export const GetIntroduceR = (req,res)=>{
    res.render('introduceR')
}