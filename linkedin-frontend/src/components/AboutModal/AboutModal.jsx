import React from 'react'

const AboutModal = () => {
  return (
    <div className="my-8">

      <div className="w-full mb-4">
        <label htmlFor="">About*</label>
        <br />
        <textarea className='p-2 mt-1 w-full border rounded-md' name="" id="" cols={10} rows={3}></textarea>
      </div>

      <div className="w-full mb-4">
        <label htmlFor="">Skills* (Add by separating comma)</label>
        <br />
        <textarea className='p-2 mt-1 w-full border rounded-md' name="" id="" cols={10} rows={3}></textarea>
      </div>

      <div className="w-full mb-4">
        <label className='p-2 bg-blue-800 text-white rounded-lg cursor-pointer' htmlFor="resumeUpload">Resume Upload</label>
        <input type="file" id='resumeUpload' className='hidden' />

        <div className="my-2">resume.pdf</div>

      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">Save</div>

    </div>
  )
}

export default AboutModal
