import React from "react";

function MentionSection() {
  return (
    <div className="p-2 pl-1 pr-5 bg-[#1A1D21] flex">
      <div className="my-auto flex p-1 rounded-lg cursor-pointer w-full">
        <label className="text-white text-sm cursor-pointer my-auto">To:</label>
        <input style={{ width : '100%' }} placeholder="@somebody or somebody@example.com" className="bg-[#1A1D21] ml-2 my-auto" type='text' />
      </div>
    </div>
  );
}

export default MentionSection;
