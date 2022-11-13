import React from "react";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function SidebarMainMenu(){
    return (
        <div 
            className="py-3 text-white"
            style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            
            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <MessageOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Threads</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <NotificationImportantOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Direct messages</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <AlternateEmailOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Mentions and reactions</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <SendOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Draft & sent</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <WorkspacesOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Blue Space Workspace</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <MoreVertOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">More</label>
            </div>


        </div>
    );
}

export default SidebarMainMenu