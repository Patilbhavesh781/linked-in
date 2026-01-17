import React from 'react'

const ImageModal = ({ isCircular }) => {
    return (
        <div className='p-5 relative flex items-center flex-col h-full'>
            {
                isCircular ? (
                    <img className='rounded-full h-[150px] w-[150px]' src="http://res.cloudinary.com/dbraoytbj/image/upload/v1747213557/xwyq1qwjpsythq3dmroo.png" alt="" />
                ) : (
                    <img className='rounded-xl w-full h-[200px] object-cover' src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake-landscape-scenic.jpg" alt="" />
                )
            }

            <label htmlFor="btn-submit" className='absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Upload</label>
            <input type="file" className='hidden' id='btn-submit' />

            <div className='absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Submit</div>


        </div>
    )
}

export default ImageModal
