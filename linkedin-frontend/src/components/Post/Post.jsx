import React, { use } from 'react'
import Card from '../Card/Card'
import { useState, useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Post = ({ profile, item, key, personalData }) => {

    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);

    const [comments, setComments] = useState([]);

    const [liked, setLiked] = useState(false);
    const [noOfLikes, setNoOfLike] = useState(item?.likes.length);

    const [commentText, setCommentText] = useState("");

    const handleSendComment = async (e) => {
        e.preventDefault();
        if (commentText.trim().length === 0) return toast.error("Please enter comment");

        await axios.post(`http://localhost:4000/api/comment`, { postId: item?._id, comment: commentText }, { withCredentials: true }).then((res => {
            setComments([res.data.comment, ...comments]);
        })).catch(err => {
            console.log(err);
            alert('Something Went Wrong!');
        });
    }

    useEffect(() => {
        let selfId = personalData?._id;
        item?.likes?.map((item) => {
            if (item.toString() === selfId.toString()) {
                setLiked(true);
                return
            } else {
                setLiked(false)
            }
        })
    }, [])

    const handleLikeFunc = async () => {
        await axios.post('http://localhost:4000/api/post/likeDislike', { postId: item?._id }, { withCredentials: true }).then(res => {
            if (liked) {
                setNoOfLike((prev) => prev - 1);
                setLiked(false);
            } else {
                setLiked(true);
                setNoOfLike((prev) => prev + 1);
            }
        }).catch(err => {
            console.log(err);
            alert('Something Went Wrong!');
        });
    }

    const handleCommentBoxOpenClose = async () => {
        setComment(true);
        await axios.get(`http://localhost:4000/api/comment/${item?._id}`).then(resp => {
            console.log(resp)
            setComments(resp.data.comments)
        }).catch(err => {
            console.log(err);
            alert('Something Went Wrong!');
        });
    }

    const desc = item?.desc;

    return (
        <Card padding={0} >
            <div className='flex gap-3 p-4'>
                <div className='w-12 h-12 rounded-4xl'>
                    <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src={item?.user?.profilePic} alt="" />
                </div>

                <div>
                    <div className='text-lg font-semibold'>{item?.user?.f_name}</div>
                    <div className='text-xs text-gray-500'>{item?.user?.headline}</div>
                </div>
            </div>


            <div className='text-md p-4 my-3 whitespace-pre-line grow'>
                {seeMore ? desc : desc?.length > 50 ? `${desc.slice(0, 50)}...` : `${desc}`} {desc?.length < 50 ? null : <span onClick={() => setSeeMore(prev => !prev)} className='cursor-pointer text-gray-500'>{seeMore ? "See Less" : "See More"}</span>}
            </div>


            {
                item?.imageLink && <div className='w-full h-[300px]'>
                    <img className='w-full h-full' src={item?.imageLink} alt="" />
                </div>
            }

            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <ThumbUpIcon sx={{ color: "blue", fontSize: 12 }} /> <div className='text-sm text-gray-600' >{noOfLikes} Likes</div>
                </div>
                <div className='text-gray-500 cursor-pointer flex gap-1 items-center'>
                    <div className='text-sm text-gray-600'>{item?.comments} Comments</div>
                </div>
            </div>

            {
                !profile && <div className='flex p-1'>
                    <div onClick={handleLikeFunc} className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>{liked ? <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} /> : <ThumbUpOutlinedIcon sx={{ fontSize: 22 }} />} <span>{liked ? 'Liked' : 'Like'}</span></div>
                    <div onClick={handleCommentBoxOpenClose} className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><CommentIcon sx={{ fontSize: 22 }} /> <span>Comment</span></div>
                    <div className='w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><SendIcon sx={{ fontSize: 22 }} /> <span>Share</span></div>
                </div>
            }

            {/* Comment Section */}
            {
                comment && <div className='p-4 w-full'>
                    <div className='flex gap-2 items-center'>
                        <img className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' src={personalData?.profilePic} alt="" />

                        <form className='w-full flex gap-2' action="" onSubmit={handleSendComment}>
                            <input value={commentText} onChange={(event) => setCommentText(event.target.value)} type="text" placeholder='Add a comment...' className='w-full border py-3 px-5 rounded-3xl hover:bg-gray-100' />
                            <button type='submit' className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3'>Send</button>
                        </form>

                    </div>

                    {/* other's Comment Section */}

                    <div className='w-full p-4'>
                        {
                            comments.map((item, index) => {
                                return (
                                    // Always add a unique key when mapping over arrays in React
                                    <div className='my-4' key={item?._id || index}>
                                        <div className='flex gap-3'>
                                            <img className='rounded-4xl w-10 h-10 border-2 border-white cursor-pointer' src={item?.user?.profilePic} alt="" />

                                            <div className='cursor-pointer'>
                                                {/* 🌟 Dynamic names instead of hardcoded data */}
                                                <div className='text-md'>{item?.user?.f_name || "Anonymous"}</div>
                                                <div className='text-sm text-gray-500'>{item?.user?.headline || ""}</div>
                                            </div>
                                        </div>

                                        <div className='px-11 my-2'>{item?.comment}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            }
            <ToastContainer />
        </Card>
    )
}

export default Post
