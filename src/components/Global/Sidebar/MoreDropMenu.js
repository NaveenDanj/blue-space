import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ArticleIcon from '@mui/icons-material/Article';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    
    {...props}
  />
))(({ theme }) => ({
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
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div onClick={handleClick} className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
        <MoreVertOutlinedIcon
          className="my-auto mr-2 cursor-pointer"
          fontSize="12"
        />
        <label className="my-auto text-sm cursor-pointer">More</label>
      </div>


      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >

          <MenuItem onClick={handleClose} disableRipple>
            <MarkUnreadChatAltIcon className="text-sm" />
            <label className="text-sm">Unread</label>
          </MenuItem>

          <Divider sx={{ my: 0.5 }} />

          <MenuItem onClick={handleClose} disableRipple>
            <AssignmentIndIcon className="text-sm" />
            <label className="text-sm">People & user groups</label>
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            <ManageSearchIcon className="text-sm"/>
            <label className="text-sm">All channels</label>
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            <ArticleIcon className="text-sm"/>
            <label className="text-sm">Files</label>
          </MenuItem>

        </StyledMenu>

      </ThemeProvider>

    </div>
  );
}
