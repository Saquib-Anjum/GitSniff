import { MdLogout } from "react-icons/md";
// TODO Implement Logout functionality

const Logout = () => {
	return (
		<>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10 mt-auto border border-gray-800'>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;