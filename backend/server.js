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

    // Session configuration - enhanced for production
    app.use(session({
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production', // true in production
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // important for cross-site cookies
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      }
    }));

    app.use(express.json());
   // CORS Configuration
   const allowedOrigins = [
    "http://localhost:3000",
    "https://git-sniff.vercel.app"
  ];
  app.use(cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // Allow cookies/sessions
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
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

