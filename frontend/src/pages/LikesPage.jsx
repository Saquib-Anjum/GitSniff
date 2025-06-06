import React from 'react'
import { FaHeart } from "react-icons/fa";
const LikesPage = () => {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
    <table className='w-full text-sm text-left rtl:text-right bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10 overflow-hidden'>
      <thead className='text-xs uppercase bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10'>
        <tr>
          <th scope='col' className='p-4'>
            <div className='flex items-center'>No</div>
          </th>
          <th scope='col' className='px-6 py-3'>
            Username
          </th>
          <th scope='col' className='px-6 py-3'>
            Date
          </th>
          <th scope='col' className='px-6 py-3'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10 border-b'>
          <td className='w-4 p-4'>
            <div className='flex items-center'>
              <span>1</span>
            </div>
          </td>
          <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
            <img
              className='w-10 h-10 rounded-full'
              src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
              alt='Jese image'
            />
            <div className='ps-3'>
              <div className='text-base font-semibold'>dasdas</div>
            </div>
          </th>
          <td className='px-6 py-4'>das</td>
          <td className='px-6 py-4'>
            <div className='flex items-center'>
              <FaHeart size={22} className='text-red-500 mx-2' />
              Liked your profile
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default LikesPage
