import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js'
const app = express();
//config
dotenv.config();
app.use(express.json());
//api end point
app.use('/api/user',userRouter);
//listening app
const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on :http://localhost:${PORT}`);

})
