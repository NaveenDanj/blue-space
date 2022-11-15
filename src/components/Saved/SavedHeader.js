import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import SidebarDrawer from "../Global/SidebarDrawer";
import IconButton from "@mui/material/IconButton";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

function SavedHeader() {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
      className="bg-[#1A1D21] px-3 flex"
    >
      <IconButton className="my-auto" aria-label="delete">
        <HomeWorkOutlinedIcon className=" text-blue-600 " />
      </IconButton>

      <div className="block md:hidden">
        <SidebarDrawer />
      </div>

      <div className="my-auto flex p-1 rounded-lg hover:bg-[#222529] cursor-pointer">
        <label className="text-white cursor-pointer font-extrabold ">
          Saved items
        </label>
      </div>
    </div>
  );
}

export default SavedHeader;
