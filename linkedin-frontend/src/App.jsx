import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Navbar2 from './components/Navbar2/Navbar2'
import Feed from './pages/Feed/Feed'
import MyNetwork from './pages/MyNetwork/MyNetwork'
import Resume from './pages/Resume/Resume'
import Messages from './components/Messages/Messages'
import Profile from './pages/Profile/Profile'
import AllActivity from './pages/AllActivity/AllActivity'
import SingleActivity from './pages/SingleActivity/SingleActivity'
import Notification from './pages/Notification/Notification'

import axios from 'axios'

function App() {

  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  const changeLoginValue = (val)=>{
    setIsLogin(val)
  }

  // const isLogin = true;

  // const fetchData = async()=>{
  //   await axios.post('http://localhost:4000/api/auth/login', {email:"", password:""}).then((res)=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // };

  // useEffect(()=>{
  //   fetchData()
  // }, []);

  return (
    <>
      <div className='bg-gray-100 w-full h-full box-border'>
        {isLogin ? <Navbar2 /> : <Navbar1 />}
        <Routes>
          <Route path='/' element={isLogin?<Navigate to={'/feed'} />:<LandingPage changeLoginValue={changeLoginValue} />} />

          <Route path='/signup' element={isLogin?<Navigate to={'/feed'} />:<SignUp changeLoginValue={changeLoginValue} />} />
          
          <Route path='/login' element={isLogin?<Navigate to={'/feed'} />:<Login changeLoginValue={changeLoginValue} />} />
          
          <Route path='/feed' element={isLogin?<Feed />:<Navigate to={'/login'} />} />
          
          <Route path='/mynetwork' element={<MyNetwork />} />
          
          <Route path='/resume' element={<Resume />} />
          
          <Route path='/messages' element={<Messages />} />
          
          <Route path='/notification' element={<Notification />} />
          
          <Route path='/profile/:id' element={<Profile />} />
          
          <Route path='/profile/:id/activity' element={<AllActivity />} />
          
          <Route path='/profile/:id/activity/:postId' element={<SingleActivity />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
