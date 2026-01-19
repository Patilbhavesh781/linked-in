import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

const AddModal = () => {
    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <img className='rounded-full w-15 h-15' src={"http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png"} alt="img" />
                </div>
                <div className='text-2xl'>Mashhood Ahmed</div>
            </div>

            <div>
                <textarea cols={50} rows={5} placeholder='What do you want to talk about?' className='my-3 outline-0 text-xl p-2' name="" id=""></textarea>
            </div>

            <div>
                <img className='w-20 h-20 rounded-xl' src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake-landscape-scenic.jpg" alt="" />
            </div>

            <div className='flex justify-between items-center'>
                <div className='my-5'>
                    <label className='cursor-pointer' htmlFor="inputFile"><ImageIcon /></label>
                    <input type="file" className='hidden' name="" id="inputFile" />
                </div>

                <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit'>Post</div>

            </div>

        </div>
    )
}

export default AddModal
