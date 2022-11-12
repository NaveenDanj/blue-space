import { Avatar } from '@mui/material'
import React from 'react'

function ChatContent() {
  return (
    <div className='px-3 flex pb-5 hover:bg-[#222529] py-2 cursor-pointer'>
        <Avatar sx={{ width: 44, height: 44 }}>N</Avatar>
        <div className="flex flex-col ml-2 my-auto cursor-pointer">
            <div className='flex cursor-pointer'>
                <label className=" text-white cursor-pointer">Naveen Dhananjaya</label>
                <label className='text-white text-xs my-auto ml-2 cursor-pointer'>1.00 PM</label>
            </div>
          <label className=" text-white text-sm cursor-pointer">Quis do velit aliquip excepteur tempor quis consectetur qui id id. Quis do velit aliquip excepteur tempor quis consectetur qui id id.</label>
        </div>
    </div>
  )
}

export default ChatContent