import React from 'react'

const ExpModal = () => {
    return (
        <div className='mt-8 w-full h-[350px] overflow-auto'>
            <div className="w-full mb-4">
                <label htmlFor="">Role*</label>
                <br />
                <input type="text" placeholder='Enter Role' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Company*</label>
                <br />
                <input type="text" placeholder='Enter Company' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Duration*</label>
                <br />
                <input type="text" placeholder='Duration' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Current Location*</label>
                <br />
                <input type="text" placeholder='Enter Company Location' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">Save</div>

        </div>
    )
}

export default ExpModal
