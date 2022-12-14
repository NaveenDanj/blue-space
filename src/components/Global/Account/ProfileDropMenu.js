import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileDialog from "./ProfileDialog";
import { useSelector } from 'react-redux'
import { useState } from "react";




const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  })
);

function ProfileDropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const userDocData = useSelector((state) => state.currentUser.currentUserDoc);

  return (
    <div>
      <IconButton className="my-auto" onClick={handleClick}>
        <Avatar className="cursor-pointer" style={{ width: 30, height: 30 }}>
          {userDocData && (<img
            style={{ width: 37, height: 37 }}
            alt=""
            className="mb-2 rounded-sm"
            src={userDocData.photoURL}
          />)}
        </Avatar>
      </IconButton>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem className="flex" onClick={handleClose} disableRipple>
            <Avatar style={{ width: 30, height: 30 }}>
              {userDocData && (
                <img
                  style={{ width: 37, height: 37 }}
                  alt=""
                  className="mb-2 rounded-sm"
                  src={userDocData.photoURL}
                />
              )}
            </Avatar>
            <div className="ml-2 flex flex-col">
                <label className="text-sm font-semibold">{userDocData && userDocData.displayName}</label>
                <label className="text-xs font-semibold">Active</label>
            </div>
          </MenuItem>

          <Divider sx={{ my: 0.5 }} />

          <MenuItem onClick={handleClose} disableRipple>
            <AssignmentIndIcon className="text-sm" />
            <label className="text-sm">People & user groups</label>
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            <ManageSearchIcon className="text-sm" />
            <label className="text-sm">All channels</label>
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            {/* <ArticleIcon className="text-sm" /> */}
            <label className="text-sm">Sign out of ShiftX Tech</label>
          </MenuItem>
        </StyledMenu>
      </ThemeProvider>
    </div>
  );
}

export default ProfileDropMenu;
