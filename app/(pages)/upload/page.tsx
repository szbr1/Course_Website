import React from 'react'
import Upload from '../_components/Upload'

function page() {
  return (
    <div className='bg-red-300 rounded-sm p-3'>
        <Upload className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' signatureEndpoint={"/api/sign-cloudinary-params"} />
    </div>
  )
}

export default page