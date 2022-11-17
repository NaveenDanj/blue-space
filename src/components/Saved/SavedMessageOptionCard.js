import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import IconButton from "@mui/material/IconButton";
import FaceIcon from '@mui/icons-material/Face';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TagIcon from '@mui/icons-material/Tag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";



const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function SavedMessageOptionCard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        className="my-auto w-72 rounded-md flex"
      >
        <IconButton size="small" className="my-auto" aria-label="delete">
          <CheckBoxIcon className=" text-white text-xs" />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <FaceIcon className=" text-white text-sm" />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <ThumbUpIcon className=" text-white " />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <TagIcon className=" text-white " />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <BookmarkIcon className=" text-pink-500 " />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <QuickreplyIcon className=" text-white " />
        </IconButton>

        <IconButton className="my-auto" aria-label="delete">
          <MoreVertIcon className=" text-white " />
        </IconButton>

      </div>
    </ThemeProvider>
  );
}

export default SavedMessageOptionCard;
