import React from 'react'
import Repo from "./Repo";
const Repos = ({repos}) => {
  return (
    
		<div className={`lg:w-2/3 w-full bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10 rounded-lg px-8 py-6`}>
   <ol className='relative border-s border-gray-200'>
			{repos.map(repo=>(
        <Repo key={repo.id} repo={repo}/>
      ))}
        {repos.length==0 && <div className='flex items-center justify-center'>
          No repo found
          </div>}
			</ol>
  </div>
  )
}

export default Repos
