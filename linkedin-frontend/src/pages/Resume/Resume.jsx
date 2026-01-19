import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'

const Resume = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      <div className='w-full py-5 sm:w-[74%]'>
        <img className='w-full h-full rounded-lg' src={"https://th.bing.com/th/id/R.24af589dc4865e0fa8e63f454025f868?rik=nStnTs%2bFFJYZyQ&pid=ImgRaw&r=0"} alt="" />
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
