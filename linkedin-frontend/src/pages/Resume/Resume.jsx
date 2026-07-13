import React from 'react'
import { useState, useEffect } from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'

const Resume = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let userData = localStorage.getItem('userInfo')
    setUserData(userData ? JSON.parse(userData) : null)
  }, [])

  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      <div className='w-full py-5 sm:w-[74%]'>
        {
          userData?.resume? <img className='w-full h-full rounded-lg' src={userData?.resume} alt="" /> : <div className='flex justify-center align-middle items-center md:w-[23%] h-[270px] sm:w-full'>No Resume To Show</div>
        }
      </div>
      <div className='w-[26%] py-5 hidden md:block'>
        <div className='sticky top-19'>
          <Advertisement />
        </div>
      </div>
    </div>
  )
}

export default Resume
