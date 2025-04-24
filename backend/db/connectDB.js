import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log("Mongo URI:",process.env.MONGODB_URI)
const connectDB = async ()=>{
try{
    mongoose.connection.on('connected' , ()=>{
        console.log("DB Connected")
    })
await mongoose.connect(`${process.env.MONGODB_URI}`)

}catch(err){
    console.log(err);
}
}
export default connectDB;