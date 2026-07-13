import React from 'react'
import { useState } from 'react'

const EditInfoModal = ({ handleEditFunc, selfData }) => {

    const [data, setData] = useState({ f_name: selfData?.f_name, headline: selfData?.headline, curr_company: selfData?.curr_company, curr_location: selfData?.curr_location })

    const onChangeHandle = (event, key) => {
        setData({ ...data, [key]: event.target.value })
    }

    const handleSaveBtn = async () => {
        let newData = { ...selfData, ...data };
        handleEditFunc(newData)
    }

    return (
        <div className='mt-8 w-full h-[350px] overflow-auto'>
            <div className="w-full mb-4">
                <label htmlFor="">Full Name*</label>
                <br />
                <input value={data.f_name} onChange={(e) => { onChangeHandle(e, 'f_name') }} type="text" placeholder='Enter Full Name' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Headline*</label>
                <br />
                <textarea value={data.headline} onChange={(e) => { onChangeHandle(e, 'headline') }} className='p-2 mt-1 w-full border rounded-md' name="" id="" cols={10} rows={3}></textarea>
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Current Company*</label>
                <br />
                <input value={data.curr_company} onChange={(e) => { onChangeHandle(e, 'curr_company') }} type="text" placeholder='Enter Current Company' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="">Current Location*</label>
                <br />
                <input value={data.curr_location} onChange={(e) => { onChangeHandle(e, 'curr_location') }} type="text" placeholder='Enter Current Location' className='p-2 mt-1 w-full border rounded-md' />
            </div>

            <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl" onClick={handleSaveBtn}>Save</div>

        </div>
    )
}

export default EditInfoModal
