import React from 'react'
import Card from '../Card/Card'

const ProfileCard = () => {
  return (
    <Card padding={0} >
        <div className='relative h-25'>
          <div className='relative w-full h-22 rounded-md'>
            <img src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zulian-yuliansyah-573130.jpg&fm=jpg" alt="" className='rounded-t-md w-full h-full' />
          </div>
          <div className='absolute top-14 left-6 z-10'>
            <img src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" className='rounded-4xl border-2 h-16 w-16 border-white cursor-pointer' />
          </div>
        </div>
        <div className='p-5'>
          <div className='text-xl'>Mashhood Danish</div>
          <div className='text-sm my-1'>@Amazon Software Eng</div>
          <div className='text-sm my-1'>Delhi, India</div>
          <div className='text-sm my-1'>Amazon</div>
        </div>
    </Card>
  )
}

export default ProfileCard
