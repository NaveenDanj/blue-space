import React from "react";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SideBarMain from "./Sidebar/SideBarMain";

function SidebarDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          onClick={toggleDrawer("left", true)}
          className="my-auto"
          aria-label="delete"
        >
          <AutoAwesomeMosaicIcon className=" text-white " />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <div className="h-[100vh] bg-[#19171D]">

          <SideBarMain type="Drawer" />

          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SidebarDrawer;
