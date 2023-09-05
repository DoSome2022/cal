import mongoose from "mongoose";
// import slugify from "slugify";

const BookingSchema =new mongoose.Schema({
  id:{
    type:Number,
  },
    start_date:{type : Date},
    end_date: {type : Date},
    text:{type : String },
    
    
})


// BookingSchema.pre('validate',function(next){
//     if(this.text){
//         this.text = slugify(this.text,{lower:true , strict:true})
//     }


//     next();
// })

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema)

export default Booking