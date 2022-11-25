import React from "react";
import TextField from "@mui/material/TextField";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ChannelCard from "./ChannelCard";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function ChannelBody() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          overflowY: "auto",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          //   maxHeight: "calc(100vh - 90px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        className="bg-[#1A1D21] px-4 pb-10"
      >
        <div className="mt-5"></div>

        <div>
          <TextField
            size="small"
            className="w-full"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search by file name or keyword"
          />
        </div>

        <div
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          className="mt-10 flex mb-2"
        >
          <label className="text-sm text-gray-500  font-semibold">
            17 recommended results
          </label>
        </div>

        <div
          style={{
            height: "calc(100vh - 215px)",
          }}
          className=" pb-3 overflow-y-auto px-3"
        >
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />

          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />

          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ChannelBody;
