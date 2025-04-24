import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js'
import exploreRouter from './routes/exploreRoutes.js'

const app = express();
//config
dotenv.config();
app.use(express.json());
app.use(cors())
//api end point
app.use('/api/user',userRouter);
app.use('/api/user',exploreRouter);
//listening app
const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on :http://localhost:${PORT}`);

})
