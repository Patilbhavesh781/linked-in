import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import axios from 'axios';

const MyNetwork = () => {

  const [text, setText] = useState("Catch up with Friends");
  const [data, setData] = useState([]);

  const handleFriends = async () => {
    setText("Catch up with Friends");
  }

  const handlePending = async () => {
    setText("Pending Request");
  }

  const fetchFriendList = async () => {
    await axios.get('http://localhost:4000/api/auth/friendsList', { withCredentials: true }).then((res) => {
      console.log(res)
      setData(res.data.friends || [])
    }).catch(err => {
      console.log(err);
      alert("Something Went Wrong")
    })

  }

  const fetchPendingRequest = async () => {
    await axios.get('http://localhost:4000/api/auth/pendingFriendsList', { withCredentials: true }).then((res) => {
      console.log(res)
      setData(res.data.pending_friends || [])
    }).catch(err => {
      console.log(err);
      alert("Something Went Wrong")
    })

  }

  useEffect(() => {
    if (text === "Catch up with Friends") {
      fetchFriendList()
    } else {
      fetchPendingRequest()
    }
  }, [text]);

  return (
    <div className='px-5 xl:px-50 py-9 flex flex-wrap gap-5 w-full mt-5 bg-gray-100'>
      <div className='py-4 px-10 border border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl'>
        <div>{text}</div>
        <div className='flex gap-3'>
          <button onClick={handleFriends} className={`p-1 cursor-pointer border rounded-lg border-gray-300 ${text === "Catch up with Friends" ? 'bg-blue-800 text-white' : ''} `}>Friends</button>
          <button onClick={handlePending} className={`p-1 cursor-pointer border rounded-lg border-gray-300 ${text === "Pending Request" ? 'bg-blue-800 text-white' : ''}`}>Pending Request</button>

        </div>
      </div>

      <div className='flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center'>

        {
          data?.map((item, index) => {
            return (
              <div className='md:w-[23%] h-[270px] sm:w-full'>
                <ProfileCard data={item} />
              </div>
            );
          })
        }

        {
          data.length===0 ? text === "Catch up with Friends"? <div>No any Friends yet</div> : <div>No any Pending Requests yet</div> : null
        }

      </div>

    </div>
  )
}

export default MyNetwork
