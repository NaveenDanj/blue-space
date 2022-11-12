import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import IconButton from '@mui/material/IconButton';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


function ChannelSection(){
    return (
        <div className="mt-3">
            
            <div className='flex justify-between'>

                <div className='flex'>
                    <IconButton className='my-auto'>
                        <ArrowDropDownOutlinedIcon className='text-white' />
                    </IconButton>

                    <label className='my-auto'>Channels</label>
                </div>

                <div>

                    <IconButton>
                        <MoreVertOutlinedIcon fontSize='8' className='text-white' />
                    </IconButton>
                    
                    <IconButton>
                        <AddOutlinedIcon fontSize='8' className='text-white' />
                    </IconButton>

                </div>



            </div>

            <div>

                <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                    <TagOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                    <label className="my-auto text-sm cursor-pointer">Channel 1</label>
                </div>

                <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                    <TagOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                    <label className="my-auto text-sm cursor-pointer">Easy helth</label>
                </div>

                <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                    <TagOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                    <label className="my-auto text-sm cursor-pointer">POS</label>
                </div>

                <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                    <TagOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                    <label className="my-auto text-sm cursor-pointer">ILM Shipping</label>
                </div>

            </div>


        </div>
    );
}

export default ChannelSection;