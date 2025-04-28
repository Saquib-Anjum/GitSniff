import express from 'express';
import {getUserProfileAndRepos} from '../controllers/userController.js'
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated.js'
import {likeProfileController,getLikes} from '../controllers/likeProfileController.js'
const userRouter = express.Router();

//all routes    profile/:username
userRouter.get('/profile/:username',getUserProfileAndRepos)
//now router for like 
userRouter.post('/like/:username',ensureAuthenticated,likeProfileController);

userRouter.get('/likes',ensureAuthenticated,getLikes);
export default userRouter