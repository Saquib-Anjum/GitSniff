import React from 'react'
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import {formatMemberSince,formatDate} from '../utils/fuction.js'
import {PROGRAMMING_LANGUAGES } from '../utils/programmingLanguage.js';
import {toast} from 'react-hot-toast'
const Repo = ({repo}) => {
	//console.log("repo :",repo)
	const memberSince = formatMemberSince(repo.created_at);

	const cloneRepoHandler = async()=>{
		try{
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("🪁Repo 📎Cloned")
		}catch(err){
			toast.error("Failed to copy clone URl");
		}
	}
  return (
    <div>
      <li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={repo.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repo.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {repo.stargazers_count
					}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repo.stargazers_count
					}

				</span>
				<span
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				 onClick={cloneRepoHandler}>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				{memberSince}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>{repo.description ? repo.description:"No repo description"}</p>
			{PROGRAMMING_LANGUAGES[repo.language]?(
				<img src={PROGRAMMING_LANGUAGES[repo.language]}/>
			) : null}
		</li>
    </div>
  )
}

export default Repo
