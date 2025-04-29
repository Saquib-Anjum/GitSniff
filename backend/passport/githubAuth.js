import passport from 'passport';
import userModel from '../models/userModel.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
import { Strategy as GitHubStrategy } from 'passport-github2'
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `https://git-sniff-backend.vercel.app/api/auth/github/callback`
  },
  async function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
//console.log(profile);
try {
  //console.log('GitHub Profile:', profile);  // ✅ Check profile

  const user = await userModel.findOne({ username: profile.username });
  if (!user) {
    console.log('New user, saving to DB...');  // ✅ See if new user

    const newUser = new userModel({
      username: profile.username,
      name: profile.displayName,
      profileUrl: profile.profileUrl, 
      avatarUrl: profile.photos[0].value,
      likedProfiles: [],
      likedBy: []
    });

    await newUser.save();  // ✅ Save new user
    console.log('User saved successfully!');  // ✅ Confirm saved

    done(null, newUser);
  } else {
    console.log('User already exists.');
    done(null, user);
  }
} catch (err) {
  console.error('Error in GitHub Strategy:', err);  // ✅ Catch any error
  done(err, null);
}
  }
));
