import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios'
const getUserProfileAndRepos = async(req , res)=>{
try{
// Get user profile
const {username} = req.params;
const headers = {
    authorization:`token ${process.env.GITHUB_API_KEY}`
}

const userRes = await axios.get(
    `https://api.github.com/users/${username}`,{headers}
  );
  const userProfile = userRes.data;

  // Get user repos in a separate request
  const reposRes = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = reposRes.data;

  res.status(201).json({
    success:true,
    userProfile :userProfile ,
    repos:repos
   

  })



}catch(err){
    console.log(err);
    res.status(404).json({
        success:false,
        message:err.message
    })
}
}
export {getUserProfileAndRepos}