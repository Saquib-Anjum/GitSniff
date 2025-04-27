import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import exploreRouter from './routes/exploreRoutes.js'
import connectDB from './db/connectDB.js'
const app = express();
//config



app.use(express.json());
app.use(cors())
//Db conection
connectDB();
//api end point
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter);
app.use('/api/user',exploreRouter);
//listening app
const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on :http://localhost:${PORT}`);

})
