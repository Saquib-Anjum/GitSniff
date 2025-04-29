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

const PORT = 5000;

const startServer = async () => {
  try {
    await connectDB();  // ✅ Await database connection first

    app.use(session({
      name: 'connect.sid',      // Optional: session cookie name
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: true,           // 🛑 IMPORTANT on Vercel (force HTTPS)
        sameSite: 'none'        // 🛑 IMPORTANT for cross-origin frontend/backend
      }
    }));

    app.use(express.json());
   // CORS Configuration
   const allowedOrigins = [
    "http://localhost:3000",
    "https://git-sniff.vercel.app"
  ];
app.use(cors({
  origin: allowedOrigins,    // frontend origin
  credentials: true                   // allow cookies/sessions
}));

    app.use(passport.initialize()); // ✅ Don't forget to initialize passport after session
    app.use(passport.session());

    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);
    app.use('/api/user', exploreRouter);

    app.listen(PORT, () => {
      console.log(`server is running on : http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer(); // ⬅️ Start the app

