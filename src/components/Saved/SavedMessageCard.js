import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import SavedMessageOptionCard from "./SavedMessageOptionCard";

function SavedMessageCard() {
  let [optionShow, setOptionShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setOptionShow(true)}
      onMouseLeave={() => setOptionShow(false)}
      className="w-[100%] mt-3 cursor-pointer"
    >
      <div className=" rounded-xl w-[100%] bg-[#1A1D21] p-3 mt-1 cursor-pointer">
        <div className="flex mb-2 justify-between">
          <label className="text-sm my-auto">Direct Message</label>
        </div>
        <div className="flex justify-between mt-2 cursor-pointer">
          <div className="flex">
            <Avatar>M</Avatar>
            <div className="ml-3 flex flex-col  cursor-pointer">
              <div>
                <label className=" text-sm font-semibold mr-2 cursor-pointer">
                  Naveen Hettiwaththa
                </label>
                <label className="text-gray-300 text-sm cursor-pointer">
                  2:27PM
                </label>
              </div>
              <label className=" text-gray-300 cursor-pointer">
                WaseemWaseem Nooruddin joined Slack — take a second to say
                hello.
              </label>
            </div>
          </div>

          <div className="my-auto">
            {optionShow && (
              <div>
                <SavedMessageOptionCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedMessageCard;
