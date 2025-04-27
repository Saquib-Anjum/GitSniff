import express from 'express';
import {githubAuth } from '../controllers/authController.js'
const authRouter = express.Router();

//route API
authRouter.get('/github',githubAuth );
export default authRouter;