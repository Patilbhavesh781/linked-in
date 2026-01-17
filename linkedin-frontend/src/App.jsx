import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Navbar2 from './components/Navbar2/Navbar2'
import Feed from './pages/Feed/Feed'
import MyNetwork from './pages/MyNetwork/MyNetwork'
import Resume from './pages/Resume/Resume'
import Messages from './components/Messages/Messages'
import Profile from './pages/Profile/Profile'


function App() {

  const isLogin = true;

  return (
    <>
      <div className='bg-gray-100 w-full h-full box-border'>
        {isLogin ? <Navbar2 /> : <Navbar1 />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/mynetwork' element={<MyNetwork />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
