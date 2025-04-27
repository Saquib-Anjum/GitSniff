import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import Logout from './Logout.jsx'
const Sidebar = () => {
  const authUser = true;
  return (
    <div>
      <aside
        className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto  border-r border-gray-700 p-l-0.1
      bg-clip-padding backdrop-filter backdrop-blur-xl hover:bg-gray-600/10  text-white bg-opacity-10
"
      >
        <nav className="h-full flex flex-col gap-3 ">
          <Link to="/" className="flex justify-center border border-gray-900 hover:bg-gray-900 rounded-lg">
            <img className="h-10 p-1" src="/logo1.png" alt="Logo" />
          </Link>

          <Link
            to="/"
            className="p-2 flex justify-center transition-colors duration-200 rounded-lg   border border-gray-900 hover:bg-gray-900 "
          >
            <IoHome size={25} />
          </Link>

          {authUser && (
            <Link
              to="/likes"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg   border border-gray-900 hover:bg-gray-900 "
            >
              <FaThumbsUp size={25} />
            </Link>
          )}
          {/* this is for authentication user */}
          {authUser && (
            <Link
              to="/explore"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg
               border border-gray-900 hover:bg-gray-900 "
            >
              <MdExplore size={25} />{" "}
            </Link>
          )}
          {/* Signin / Login */}
          {!authUser && (
            <Link
              to="/login"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-900 border border-gray-900 "
            >
              <PiSignInBold size={25} />
            </Link>
          )}
          {/* Signup / creating accpunt*/}

          {!authUser && (
            <Link
              to="/signup"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-900 border border-gray-900 "
            >
              <img src="/Signup1.svg" alt="" className="h-8" />
            </Link>
          )}
          
         {/*  here is logout component  and the component when user is Login */}
         { authUser && (
          <div className="flex flex-col gap-2 mt-auto">
              <Logout/>
          </div>
         )

         }
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
