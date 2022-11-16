import { Avatar } from "@material-ui/core";
import React from "react";

function DirectMessageCard() {
  return (
    <div className="w-[100%] mt-3">
      <label className="text-xs ml-5">Saturday, November 12th</label>
      <div className=" rounded-xl w-[100%] bg-[#1A1D21] p-3 mt-2 flex justify-between">
        <div className="flex">
          <Avatar>M</Avatar>
          <div className="ml-3 flex flex-col">
            <label className=" text-sm font-semibold">
              Naveen Hettiwaththa
            </label>
            <label className=" text-gray-300 ">
              WaseemWaseem Nooruddin joined Slack — take a second to say hello.
            </label>
          </div>
        </div>

        <label className="text-gray-300 text-sm">2:27PM</label>
      </div>
    </div>
  );
}

export default DirectMessageCard;
