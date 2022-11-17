import React from "react";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IconButton from "@mui/material/IconButton";
import FaceIcon from "@mui/icons-material/Face";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CreateIcon from '@mui/icons-material/Create';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import SendIcon from '@mui/icons-material/Send';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});



function DraftCardOption() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        className="my-auto w-40 rounded-md flex"
      >
        <IconButton size="small" className="my-auto" aria-label="delete">
          <DeleteSweepIcon className=" text-white text-xs" />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <CreateIcon className=" text-white text-sm" />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <ScheduleSendIcon className=" text-white " />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <SendIcon className=" text-white " />
        </IconButton>

        
      </div>
    </ThemeProvider>
  );
}

export default DraftCardOption;
