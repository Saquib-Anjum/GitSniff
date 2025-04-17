import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import Logout from './Logout.jsx'
const Sidebar = () => {
  const authUser = false;
  return (
    <div>
      <aside
        className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r 
      backdrop-filter backdrop-blur-xl bg-opacity-10  border-gray-800 hover:bg-gray-600/10
"
      >
        <nav className="h-full flex flex-col gap-3">
          <Link to="/" className="flex justify-center">
            <img className="h-8" src="/github.svg" alt="Logo" />
          </Link>

          <Link
            to="/"
            className="p-2 flex justify-center transition-colors duration-200 rounded-lg bg-glass  border border-gray-900 hover:bg-gray-900 hover:bg-glass"
          >
            <IoHome size={25} />
          </Link>

          {authUser && (
            <Link
              to="/likes"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg bg-glass  border border-gray-900 hover:bg-gray-900 hover:bg-glass"
            >
              <FaThumbsUp size={25} />
            </Link>
          )}
          {/* this is for authentication user */}
          {authUser && (
            <Link
              to="/explore"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg
              bg-glass  border border-gray-900 hover:bg-gray-900 hover:bg-glass"
            >
              <MdExplore size={25} />{" "}
            </Link>
          )}
          {/* Signin / Login */}
          {!authUser && (
            <Link
              to="/login"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-900 hover:bg-glass"
            >
              <PiSignInBold size={25} />
            </Link>
          )}
          {/* Signup / creating accpunt*/}

          {!authUser && (
            <Link
              to="/signup"
              className="p-2 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-900 hover:bg-glass"
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
