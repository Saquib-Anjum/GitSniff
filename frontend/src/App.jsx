import React ,{useState} from 'react'
import {Route, Routes,Navigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage'
import Sidebar from './components/Sidebar'
import './index.css'; // ✅ This is crucial!
import {Toaster} from 'react-hot-toast'
import {useAuthContext} from './context/authContext.jsx'
const App = () => {
  const {authUser} = useAuthContext();
  console.log("authenticatedUser", authUser)
  return (
   <div className='flex text-white'>
   <Sidebar/>
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
           <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to='/'/>}/>
            <Route path="/signup" element={!authUser?<SignupPage/>:<Navigate to='/'/>}/>
            <Route path="/explore" element={authUser ?<ExplorePage/>:<Navigate to='/login'/>}/>
            <Route path="/likes" element={authUser ?<LikesPage/> :<Navigate to='/login'/>}/>
           </Routes>
           <Toaster/>
      </div>

  </div>
  )
}

export default App

