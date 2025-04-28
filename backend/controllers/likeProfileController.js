import mongoose from 'mongoose';
import userModel from '../models/userModel.js'
const likeProfileController= async(req ,res )=>{
try{
const {username} = req.params;
const user = await userModel.findById(req.user._id.toString());
console.log(user);
const userToLike = await userModel.findOne({username});
if(!userToLike){
    return res.status(404).json({
        error:"User is not member"
    })
}
if(user.likedProfiles.includes(userToLike.username)){
    res.status(400).json({
        error:"user already liked"
    })
}
userToLike.likedBy.push({
    username:user.username,
    avatarUrl:user.avatarUrl,
    likeDate:Date.now()
})
user.likedProfiles.push(userToLike.username);

// await userToLike.save();
// await user.save();
await Promise.all(userToLike.save(),user.save())

res.status(200).json({
    message:"User Liked❤️"
})
}catch(err){
    req.status(500).json({
        success:false,
        error:err.message
    })
}
}
//getLikes
const getLikes = async (req , res )=>{
 try{
const user = await userModel.findById(req.user._id.toString());
res.status(200).json({
    likedBy:user.likedBy
})
 }catch(err){
    req.status(500).json({
        success:false,
        error:err.message
    })
 }   
}
export {likeProfileController,getLikes};