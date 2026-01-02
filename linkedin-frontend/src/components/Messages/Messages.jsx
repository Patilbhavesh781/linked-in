import React from 'react'
import Card from '../Card/Card'
import Advertisement from '../Advertisement/Advertisement'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../Conversation/Conversation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';

const Messages = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      <div className='w-full justify-between flex pt-5'>

        {/* left side */}
        <div className='w-full md:w-[70%]'>
            <Card padding={0}>
                <div className='border-b border-gray-300 px-5 py-2 font-semibold text-lg'>
                    Messaging
                </div>

                <div className='border-b border-gray-300 px-5 py-2'>
                    <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused <ArrowDropDownIcon /></div>
                </div>

                {/* div for chat */}
                <div className='w-full md:flex'>
                    <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r border-gray-400'>

                        {/* for each chat */}
                        <Conversation />
                    </div>

                    {/* right side */}
                    <div className='w-full m:w-[60%] border-gray-400'>
                        <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                            <div>
                                <p className='text-sm font-semibold'>User 1</p>
                                <p className='text-sm text-gray-400'>hi this is User 1</p>
                            </div>
                            <div><MoreHorizIcon /></div>
                        </div>

                        <div className='h-[360px] w-full overflow-auto border-b border-gray-300'>
                            <div className='w-full border-b border-gray-300 gap-3 p-4'>
                                <img className='rounded-[100%] cursor-pointer w-16 h-15' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747547746/hsx0eptushavxygwhwmx.jpg" alt="" />

                                <div className='my-2'>
                                    
                                    <div className='text-md'>User 1</div>
                                    <div className='text-sm text-gray-500'>Hi this is User 1</div>
                                </div>
                            </div>

                            <div className='w-full'>

                                {/* for each messages */}
                                <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                    <div className='shrink-0'>
                                        <img className='w-8 h-8 rounded-[100%] cursor-pointer' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747547746/hsx0eptushavxygwhwmx.jpg" alt="" />
                                    </div>
                                    <div className='mb-2 w-full'>
                                        <div className='text-md'>User 1</div>

                                        <div className='text-sm mt-6 hover:bg-gray-200'>This is text message</div>
                                        <div className='my-2'><img className='w-60 h-[180px] rounded-md' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747307264/acxbhtfnwdiucgo5r5ik.jpg" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='p-2 w-full border-b border-gray-300'>
                            <textarea rows={4} className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a Message' name="" id=""></textarea>
                        </div>

                        <div className='p-3 flex justify-between'>
                            <div>
                                <label htmlFor="messageImage" className='cursor-pointer'><ImageIcon /></label>
                                <input id='messageImage' type="file" className='hidden' />
                            </div>

                            <div className='px-3 py-1 cursor-pointer rounded-2xl border bg-blue-950 text-white'>
                                Send
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

        {/* Right Side   */}
        <div className='hidden md:flex md:w-[25%]'>
            <div className="sticky top-19">
                <Advertisement />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
