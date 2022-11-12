import { Avatar } from "@mui/material";
import React from "react";

function ChatUserDetails() {
  return (
    <div style={{borderBottom : '1px solid rgba(255,255,255,0.1)'}} className="px-3 pb-3">
      <div className="flex mt-3">
        <Avatar sx={{ width: 54, height: 54 }}>N</Avatar>
        <div className="flex flex-col ml-2 my-auto">
          <label className=" text-white ">Naveen Dhananjaya (you)</label>
          <label className=" text-white text-sm">Naveen Dhananjaya</label>
        </div>
      </div>

      <p className="text-white text-md mt-5">
        This space is just for you. Jot down notes, list your to-dos, or keep
        links and files handy. You can also talk to yourself here, but please
        bear in mind you’ll have to supply both sides of the conversation.
      </p>
    </div>
  );
}

export default ChatUserDetails;
