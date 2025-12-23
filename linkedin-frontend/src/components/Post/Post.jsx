import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {

    const [seeMore, setSeeMore] = useState(false);

    const [comment, setComment] = useState(false);

    const handleSendComment = (e) => {
        e.preventDefault();
    }

    const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia, deleniti voluptas minima sit quaerat ullam. Dicta distinctio ad aliquam magnam, maxime temporibus animi laudantium eius iste nulla vero obcaecati.`;

    return (
        <Card padding={0} >
            <div className='flex gap-3 p-4'>
                <div className='w-12 h-12 rounded-4xl'>
                    <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" />
                </div>

                <div>
                    <div className='text-lg font-semibold'>Dummy User</div>
                    <div className='text-xs text-gray-500'>SDE-IT Eng. @Amazon</div>
                </div>
            </div>

            <div className='text-md p-4 my-3 whitespace-pre-line grow'>
                {seeMore ? desc : `${desc.slice(0, 50)}...`} <span onClick={() => setSeeMore(prev => !prev)} className='cursor-pointer text-gray-500'>{seeMore ? "See Less" : "See More"}</span>
            </div>

            <div className='w-full h-[300px]'>
                <img className='w-full h-full' src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake-landscape-scenic.jpg" alt="" />
            </div>

            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <ThumbUpIcon sx={{ color: "blue", fontSize: 12 }} /> <div className='text-sm text-gray-600' >1 Likes</div>
                </div>
                <div className='text-gray-500 cursor-pointer flex gap-1 items-center'>
                    <div className='text-sm text-gray-600'>2 Comments</div>
                </div>
            </div>

            <div className='flex p-1'>
                <div className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Like</span></div>
                <div onClick={()=>setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><CommentIcon sx={{ fontSize: 22 }} /> <span>Comment</span></div>
                <div className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><SendIcon sx={{ fontSize: 22 }} /> <span>Share</span></div>
            </div>

            {/* Comment Section */}
            <div className='p-4 w-full'>
                <div className='flex gap-2 items-center'>
                    <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" />

                    <form className='w-full flex gap-2' action="" onSubmit={handleSendComment}>
                        <input type="text" placeholder='Add a comment...' className='w-full border py-3 px-5 rounded-3xl hover:bg-gray-100' />
                        <button type='submit' className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3'>Send</button>
                    </form>

                </div>

                {/* other's Comment Section */}
                {
                    comment && <div className='w-full p-4'>
                        <div className='my-4'>

                            <div className='flex gap-3'>

                                <img className='rounded-4xl w-10 h-10 border-2 border-white cursor-pointer' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" />

                                <div className='cursor-pointer'>
                                    <div className='text-md'>Dummy User</div>
                                    <div className='text-sm text-gray-500'>@Amazon SDE-II</div>
                                </div>

                            </div>

                            <div className='px-11 my-2'>Hi this is Beautiful</div>

                        </div>
                    </div>

                }
            </div>
        </Card>
    )
}

export default Post
