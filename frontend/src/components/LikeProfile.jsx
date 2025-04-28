import React from 'react'
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import {toast } from 'react-hot-toast'
import {useAuthContext} from '../context/authContext';
const LikeProfile = ({ userProfile }) => {
	const {authUser} = useAuthContext();
	const isOwnerProfile =  authUser?.username===userProfile.login
    const handleLikeProfile=async ()=>{
try{
const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/like/${userProfile.login}`,{withCredentials: true});
if(data.error){
toast.error(error.message)	
}
toast.success(data.message)
const data= await result.data;
}catch(err){
toast.error(err.message)
};


    }
	if(!authUser ||isOwnerProfile) return null
    return (
		<button
			className='p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2'
			onClick={handleLikeProfile}
		>
			<FaHeart size={16} /> Like Profile
		</button>
	);
        
}

export default LikeProfile
