import { MdLogout } from "react-icons/md";
// TODO Implement Logout functionality
import {useAuthContext} from '../context/authContext'
import {toast} from 'react-hot-toast'
import axios from 'axios'
const Logout = () => {
const {authUser,setAuthUser} = useAuthContext();
const handleLogout=async ()=>{
try{
const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`,{withCredentials:true})
const data= await res.data;
console.log(data)
setAuthUser(null)
}catch(err){
	toast.error(err.message)
}
}

	return (
		<>
			<img
				src={authUser?.avatarUrl}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10  border border-gray-800' onClick={handleLogout}>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;