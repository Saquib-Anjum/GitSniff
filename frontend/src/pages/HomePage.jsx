import React ,{useState,useCallback,useEffect} from 'react'
import ProfileInfo from '../components/ProfileInfo';
import Repos from '../components/Repos';
import Spinner from '../components/Spinner';
import SortRepos from '../components/SortRepos';
import Search from '../components/Search';
const HomePage = () => {
	const [userProfile , setUserProfile]= useState(null)
	const [repos , setRepos]= useState({})
	const [loading , setLoading]= useState(false);
	const [sortType , setSortType]= useState("recent");
	
	const getUserProfileAndRepos =async ()=>{
try{

}catch(err){

}
	}
	useEffect(()=>{
   getUserProfileAndRepos();
	},[])
  return (
    <div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<ProfileInfo />
				<Repos />
				{/* <Spinner /> */}
			</div>
		</div>
  )
}

export default HomePage
