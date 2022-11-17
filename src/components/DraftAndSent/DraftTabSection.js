import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function DraftTabSection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="pl-1 pr-5 bg-[#1A1D21] flex">
        <Tabs
          style={{ height: 20 }}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example"
        >
          <Tab style={{ fontSize: 11 }} className="text-sm" label="Drafts" />
          <Tab style={{ fontSize: 11 }} label="Scheduled" />
          <Tab style={{ fontSize: 11 }} label="Sent" />
        </Tabs>
      </div>

      <div
        style={{ height: "calc(100vh - 90px)" }}
        className="w-[100%] bg-[#222529] px-6 py-4"
      >
        sda
      </div>
    </ThemeProvider>
  );
}

export default DraftTabSection;
