import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import Card from '../../components/Card/Card'

const Notification = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

      {/* Left Side */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>

        <div className='h-fit'>
          <ProfileCard />
        </div>

      </div>

      {/* Middle Side */}
      <div className='w-full py-5 sm:w-[50%] '>

        <div>
          <Card padding={0}>
            <div className="w-full">

              {/* For Each Notification */}
              <div className={`border-b cursor-pointer   flex gap-4 items-center border-gray-300 p-3`}>
                <img src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747306941/xrwoi4wh6ytmzcksnvdf.jpg" className='rounded-4xl  cursor-pointer w-15 h-15' alt="" />
                <div>Dummy User has sent you friend request</div>
              </div>

              {/* For Each Notification */}
              <div className={`border-b cursor-pointer   flex gap-4 items-center border-gray-300 p-3`}>
                <img src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747306941/xrwoi4wh6ytmzcksnvdf.jpg" className='rounded-4xl  cursor-pointer w-15 h-15' alt="" />
                <div>Dummy User has commented on your post</div>
              </div>

            </div>
          </Card>
        </div>

      </div>

      {/* Right Side */}
      <div className='w-[26%] py-5 hidden md:block'>


        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>

      </div>

    </div>
  )
}

export default Notification
