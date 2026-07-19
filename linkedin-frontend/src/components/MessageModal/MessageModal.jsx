import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MessageModal = ({ selfData, userData }) => {

    const [message, setMessage] = useState('')

    const handleSendMessage = async () => {
        await axios.post('http://localhost:4000/api/conversation/add-conversation', { receiverId: userData?._id, message:message }, { withCredentials: true }).then(res => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
            alert(err?.response?.data?.error)
        })
    }

    return (
        <div className='my-8'>
            <div className="w-full mb-4">

                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='p-2 mt-1 w-full border rounded-md' placeholder="Enter Message" id="" cols={10} rows={10}></textarea>

                <div onClick={handleSendMessage} className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">Send</div>

            </div>
        </div>
    )
}

export default MessageModal
