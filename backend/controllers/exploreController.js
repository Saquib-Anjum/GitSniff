import axios from 'axios';
import mongoose from 'mongoose';
const getReposBylanguage = async (req ,res)=>{
    const {language} = req.params;
try{
    const headers = {
        authorization:`token ${process.env.GITHUB_API_KEY}`
      }
  const result = await axios.get(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=20`,{headers});
  const repos = result.data;

  
  res.json({
    success:true,
    repos
  })
}catch(err){
    console.log(err);
    res.json({
        success:false,
        message:err.message
    })
}
}
export {getReposBylanguage}
