import React, { useState } from 'react'
import './navbar2.css'

const Navbar2 = () => {

  const [dropdown, setDropDown] = useState(false)
  return (
    <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-full z-1000'>
      <div className='flex gap-2 items-center'>
        <div>
          <img className='w-8 h-8' src={'https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png'} alt="logo" />
        </div>
        <div className='relative'>
          <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4' placeholder='Search' />
          {
            dropdown && <div className='absolute w-88 left-0 bg-gray-200'>
              <div className='flex gap-2 mb-1 cursor-pointer items-center'>
                <div><img className='w-10 h-10 rounded-full' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="img" /></div>
                <div>Danish</div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar2
