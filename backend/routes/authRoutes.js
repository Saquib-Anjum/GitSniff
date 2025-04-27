import express from 'express';
import {githubAuth } from '../controllers/authController.js'
const authRouter = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
//route API
authRouter.get('/github',passport.authenticate('github', { scope: [ 'user:email' ] } ));
authRouter.get('/github/callback', passport.authenticate('github', { failureRedirect: `${process.env.FRONTEND_BASE_URL}/login` }))
export default authRouter;