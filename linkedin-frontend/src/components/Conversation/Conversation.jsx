import React from 'react'

const Conversation = () => {
    return (
        <div className='flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200'>
            <div className='shrink-0'>
                <img className='w-12 h-12 rounded-[100%] cursor-pointer' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747547746/hsx0eptushavxygwhwmx.jpg" alt="" />
            </div>
            <div>
                <div className='text-md '>Shubham</div>
                <div className='text-sm text-gray-500 '>Engineer Amazon</div>
            </div>
        </div>
    )
}

export default Conversation
