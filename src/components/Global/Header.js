import React from 'react'
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import ProfileDropMenu from './Account/ProfileDropMenu';
import ProfileDialog from './Account/ProfileDialog';



function Header() {


    return (
        <div className=' flex justify-between bg-black p-1'>

            <div className='flex-none mt-1'>
                <IconButton aria-label="upload picture">
                    <AccessTimeIcon className='my-auto text-white' />
                </IconButton>
            </div>

            <div className='grow mt-1'>
                <div className='mt-[6px] px-1 pb-1 flex justify-between bg-gray-800 rounded-sm cursor-pointer hover:bg-slate-700 '>
                    <label className='my-auto text-xs text-white '>Search Shiftx Tech</label>
                    <div className='flex'>
                        <TuneIcon className='my-auto text-white mr-3' />
                        <SearchIcon className='my-auto text-white' />
                    </div>
                </div>
            </div>

            <div className='flex ml-2'>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <HelpOutlineIcon />
                </IconButton>
                <ProfileDialog />
            </div>

        </div>
    )
}

export default Header