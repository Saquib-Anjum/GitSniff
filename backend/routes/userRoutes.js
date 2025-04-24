import express from 'express';

const userRouter = express.Router();

//all routes
userRouter.get('/profile',(req,res)=>{
    res.send("Here is your GitHub Profile");
})
export default userRouter