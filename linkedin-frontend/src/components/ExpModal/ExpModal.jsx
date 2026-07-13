import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ExpModal = ({ handleEditFunc, selfData, updateExp, setUpdateExp }) => {

    const [data, setData] = useState({ designation: updateExp?.clicked ? updateExp?.data?.designation : "", company_name: updateExp?.clicked ? updateExp?.data?.company_name : "", duration: updateExp?.clicked ? updateExp?.data?.duration : "", location: updateExp?.clicked ? updateExp?.data?.location : "" })

    const onChangeHandle = (event, key) => {
        setData({ ...data, [key]: event.target.value })
    }

    const updateExpSave = () => {
        let newFilteredData = selfData?.experience.filter((item) => item._id !== updateExp?.data?._id);
        let newArr = [...newFilteredData, data];
        let newData = { ...selfData, experience: newArr };
        handleEditFunc(newData)
    }

    const handleOnSave = () => {
        if (updateExp?.clicked) return updateExpSave();

        let expArr = [...selfData?.experience, data];
        let newData = { ...selfData, experience: expArr };
        handleEditFunc(newData)

    }

    const handleOnDelete = () => {
        let newFilteredData = selfData?.experience.filter((item)=>item._id !==updateExp?.data?._id);
        let newData = {...selfData, experience:newFilteredData};
        handleEditFunc(newData)
    }

    return (
        <div className='mt-8 w-full h-[350px] overflow-auto'>
            <div className="w-full mb-4">
                <label htmlFor="">Role*</label>
                <br />
                <input type="text" value={data?.designation} onChange={(e) => onChangeHandle(e, 'designation')} placeholder='Enter Role' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Company*</label>
                <br />
                <input value={data?.company_name} onChange={(e) => onChangeHandle(e, 'company_name')} type="text" placeholder='Enter Company' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Duration*</label>
                <br />
                <input value={data?.duration} onChange={(e) => onChangeHandle(e, 'duration')} type="text" placeholder='Duration' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Current Location*</label>
                <br />
                <input value={data?.location} onChange={(e) => onChangeHandle(e, 'location')} type="text" placeholder='Enter Company Location' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="flex justify-between">
                <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl" onClick={handleOnSave} >Save</div>
                {
                    updateExp?.clicked && <div className="bg-red-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl" onClick={handleOnDelete} >Delete</div>
                }
            </div>

        </div>
    )
}

export default ExpModal
