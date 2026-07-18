import React, { useEffect, useState } from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Post from '../../components/Post/Post'
import axios from 'axios'


const AllActivity = () => {
    const { id } = useParams();

    const [post, setPosts] = useState([]);
    const [ownData, setOwnData] = useState(null);

    const fetchDataOnLoad = async () => {
        await axios.get(`http://localhost:4000/api/post/getAllPostForUser/${id}`).then(res => {
            console.log(res);
            setPosts(res.data.posts)
        }).catch(err => {
            console.log(err);
            toast.error(err?.response?.data?.error)
        })
    }

    useEffect(() => {
        fetchDataOnLoad();

        let userData = localStorage.getItem('userInfo')
        setOwnData(userData ? JSON.parse(userData) : null)
    }, [id])

    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

            {/* Left Side */}
            <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
                <div className='h-fit'>
                    <ProfileCard data={post[0]?.user} />
                </div>

            </div>

            {/* Middle Side */}
            <div className='w-full py-5 sm:w-[50%] '>

                <div>
                    <Card padding={1}>

                        <div className="text-xl">All Activity</div>
                        <div className="cursor-pointer w-fit p-2 border rounded-4xl bg-green-800 my-2 text-white font-semibold">Posts</div>

                        <div className="my-2 flex flex-col gap-2">

                            {
                                post.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Post item={item} personalData={ownData} />
                                        </div>
                                    )
                                })
                            }

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

export default AllActivity
