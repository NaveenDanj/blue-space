import React from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import SidebarMainMenu from "./SidebarMainMenu";

function SideBarMain() {
  return (
    <div
      className="bg-[#19171D] hidden md:block md:flex-none md:w-64 md:max-w-[100vh]"
      style={{
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
        className="bg-[#1A1D21] px-3 flex justify-between"
      >
        <div className="my-auto flex p-1 rounded-lg hover:bg-[#222529] cursor-pointer">
          <label className="text-white cursor-pointer font-extrabold ">
            ShiftX Tech
          </label>
          <ExpandMoreIcon className="text-white" />
        </div>

        <IconButton className="my-auto" aria-label="delete">
          <AppRegistrationOutlinedIcon className=" text-white " />
        </IconButton>
      </div>

      <SidebarMainMenu />
    </div>
  );
}

export default SideBarMain;
