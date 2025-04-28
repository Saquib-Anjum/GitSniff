import express from 'express';
import session from 'express-session';
const authRouter = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';

// Route API for GitHub authentication
authRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub callback
authRouter.get('/github/callback', passport.authenticate('github', { failureRedirect: `${process.env.FRONTEND_BASE_URL}/login` }),
(req, res) => {
  res.redirect(`${process.env.FRONTEND_BASE_URL}`);
});

// Check authentication status
authRouter.get('/check', (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user });
  } else {
    res.send({ user: null });
  }
});

// Logout route
authRouter.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to log out" });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error destroying session" });
      }
      res.json({ message: "User Logged Out" });
    });
  });
});

export default authRouter;
