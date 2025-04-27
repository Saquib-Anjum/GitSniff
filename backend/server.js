import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import exploreRouter from './routes/exploreRoutes.js'
import connectDB from './db/connectDB.js'
import passport from 'passport'
import session from 'express-session'
import bodyParse from 'body-parser'
import methodOverride from 'method-override'
import './passport/githubAuth.js'
const app = express();
//passport config is here
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
clearImmediate
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
