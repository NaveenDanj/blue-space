import React from 'react'
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";


const theme = createTheme({
  palette: {
    type: "dark",
  },
});
function ChatTypeSection() {
  return (
    <div
        // style={{ position: "absolute", bottom: 0 }}
        className="bg-[#1A1D21] w-full h-20 py-1 pl-5 pr-7"
      >
        <div
          className="p-2 h-[100%] "
          //   style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper
              component="form"
              className=" bg-red-500 "
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <AddIcon />
              </IconButton>

              <InputBase
                size="small"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SendIcon />
              </IconButton>
              {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton> */}
            </Paper>
          </ThemeProvider>
        </div>
      </div>
  )
}

export default ChatTypeSection