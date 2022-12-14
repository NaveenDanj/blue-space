import React from "react";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import { useNavigate  } from "react-router-dom";
import MoreDropMenu from "./MoreDropMenu";


function SidebarMainMenu(){

    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <div 
            className="py-3 text-white"
            style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            
            <div onClick={() => handleNavigate('/app')} className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <MessageOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Threads</label>
            </div>

            <div onClick={() => handleNavigate('/app/direct-messages')} className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <NotificationImportantOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Direct messages</label>
            </div>

            <div onClick={() => handleNavigate('/app/saved')} className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <BookmarksOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Saved</label>
            </div>

            <div onClick={() => handleNavigate('/app/draft')} className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <SendOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Draft & sent</label>
            </div>

            <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
                <WorkspacesOutlinedIcon className="my-auto mr-2 cursor-pointer" fontSize="12" />
                <label className="my-auto text-sm cursor-pointer">Blue Space Workspace</label>
            </div>

            <MoreDropMenu />

        </div>
    );
}

export default SidebarMainMenu