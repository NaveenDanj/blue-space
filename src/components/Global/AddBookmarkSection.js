import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function AddBookmarkSection() {
  return (
    <div className="p-2 px-3 bg-[#1A1D21] flex">
      <div className="my-auto flex p-1 rounded-lg hover:bg-[#222529] cursor-pointer">
        <AddIcon sx={{ fontSize: 16 }} className="text-white my-auto" />
        <label className="text-white text-sm cursor-pointer">
          Add bookmark
        </label>
      </div>
    </div>
  );
}

export default AddBookmarkSection;
