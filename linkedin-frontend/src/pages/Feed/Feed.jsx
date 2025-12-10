import React from 'react'
import Card from '../../components/Card/Card'

const Feed = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <Card />
        </div>
      </div>

      <div>
        Center
      </div>

      <div>
        Right
      </div>
      
    </div>
  )
}

export default Feed
