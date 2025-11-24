import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <div className='bg-gray-100 w-full h-full box-border'>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
