import React from 'react'

function PeopleCard() {
  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.1)" }} className=' w-36 rounded-md'>
        <img className='rounded-md' src='https://avatars.githubusercontent.com/u/48654030?v=4' alt='' />

        <div className='p-2'>
            <label className='text-sm font-semibold'>Naveen Hettiwaththa (you)</label>
        </div>

    </div>
  )
}

export default PeopleCard