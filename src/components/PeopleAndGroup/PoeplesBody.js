import React from "react";
import TextField from "@mui/material/TextField";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PeopleCard from "./PeopleCard";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function PoeplesBody() {
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
        className="bg-[#222529] px-4 pb-10"
      >
        <div className="mt-5"></div>

        <div>
          <TextField
            size="small"
            className="w-full"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search by name, role or team"
          />
        </div>

        <div className="mt-10 flex mb-2">
          <label className="text-sm text-gray-500  font-semibold">
            17 recommended results
          </label>
        </div>

        <div
          style={{ height: "calc(100vh - 215px)" }}
          className="px-2 py-2 overflow-y-auto w-full grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6  grid-flow-row gap-3 pb-3"
        >
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />

          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />

          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />

          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </div>

        
      </div>
    </ThemeProvider>
  );
}

export default PoeplesBody;
