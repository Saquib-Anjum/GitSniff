import React from 'react'
import Repo from "./Repo";
const Repos = () => {
  return (
    
		<div className={`lg:w-2/3 w-full bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10 rounded-lg px-8 py-6`}>
   <ol className='relative border-s border-gray-200'>
				<Repo />
				<Repo />
				<Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        
			</ol>
  </div>
  )
}

export default Repos
