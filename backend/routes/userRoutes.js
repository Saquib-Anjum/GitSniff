import express from 'express';
import {getUserProfileAndRepos} from '../controllers/userController.js'
const userRouter = express.Router();

//all routes    profile/:username
userRouter.get('/profile/:username',getUserProfileAndRepos)
export default userRouter