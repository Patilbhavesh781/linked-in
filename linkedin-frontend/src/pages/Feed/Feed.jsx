import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import { green } from '@mui/material/colors';
import Advertisement from '../../components/Advertisement/Advertisement';
import Post from '../../components/Post/Post';
import Modal from '../../components/Modal/Modal';
import AddModal from '../../components/AddModal/AddModal';

const Feed = () => {

  const [addPostModal, setAddPostModal] = useState();

  const handleOpenPostModel = ()=>{
    setAddPostModal(prev=>!prev)
  }

  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

      {/* Left Side */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard />
        </div>
        <div className='w-full my-5'>
          <Card padding={1}>
            <div className='w-full flex justify-between'>
              <div>Profile Viewers</div>
              <div className='text-blue-900'>23</div>
            </div>
            <div className='w-full flex justify-between'>
              <div>Post Impressions</div>
              <div className='text-blue-900'>90</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Middle Side */}
      <div className='w-full py-5 sm:w-[50%] '>

        <div>
          <Card padding={1}>
            <div className='flex gap-2 items-center'>

              <img src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
              <div onClick={() => setAddPostModal(true)} className='w-full border py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100 '>Start a Post</div>
            </div>

            <div className='w-full flex mt-3'>
              <div onClick={() => setAddPostModal(true)} className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <VideoCameraBackIcon sx={{ color: "green" }} />
                Video
              </div>
              <div onClick={() => setAddPostModal(true)} className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <ImageIcon sx={{ color: "blue" }} />
                Photo
              </div>
              <div onClick={() => setAddPostModal(true)} className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <ArticleIcon sx={{ color: "orange" }} />
                Article
              </div>

            </div>
          </Card>
        </div>

        <div className='border-b border-gray-400 w-full my-5' />

        <div className='w-full flex flex-col gap-5'>
          <Post />
        </div>

      </div>

      {/* Right Side */}
      <div className='w-[26%] py-5 hidden md:block'>
        <div>
          <Card padding={1}>
            <div className='text-xl'>LinkedIn News</div>
            <div className='text-gray-600'>Top Stories</div>
            <div className='my-1'>
              <div className='text-md'>Buffett to remain Berkshire chair</div>
              <div className='text-xs text-gray-400'>2h ago</div>
            </div>
            <div className='my-1'>
              <div className='text-md'>Foreign investment surge again</div>
              <div className='text-xs text-gray-400'>3h ago</div>
            </div>
          </Card>
        </div>

        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>

      </div>

      {
        addPostModal && <Modal closeModal={handleOpenPostModel} title={"Add a Post"} >
          <AddModal />
        </Modal>
      }

    </div>
  ) 
}

export default Feed
