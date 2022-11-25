import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelCard() {
  return (
    <div
        className="w-full bg-[#1A1D21] px-2 py-5 hover:bg-[#222529] hover:cursor-pointer"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
        <div className="flex flex-col">
            <label className=" text-sm font-semibold text-gray-400"># general</label>
            <div className="flex">
                <CheckCircleIcon style={{ fontSize : 12 }} className="text-sm my-auto text-[#056D52]" />
                <label className=" text-xs my-auto ml-1 text-[#056D52]">Joined</label>
                <label className="text-xs my-auto mx-2 text-gray-400">  17 members  </label>
                <div className="text-ellipsis">
                    <label className="text-xs  text-gray-400"> This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.</label>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ChannelCard;
