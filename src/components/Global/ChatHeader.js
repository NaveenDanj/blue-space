import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Avatar } from '@mui/material';
function chatHeader() {
    
    return (
        <div className='bg-[#1A1D21] px-3 flex'>

            <IconButton className='my-auto' aria-label="delete">
                <AutoAwesomeMosaicIcon className=' text-white ' />
            </IconButton>

            <div className='my-auto flex p-1 rounded-lg hover:bg-[#222529] cursor-pointer'>
                <Avatar className='mr-1' sx={{ width: 24, height: 24 }} >N</Avatar>
                <label className='text-white cursor-pointer font-extrabold '>Naveen Dhananjaya</label>
                <ExpandMoreIcon className='text-white' />
            </div>

        </div>
    );
}

export default chatHeader;
