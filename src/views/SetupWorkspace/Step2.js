import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function Step2() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="h-[100vh] bg-[#1A1D21] p-10">
        <div>
          <label className="text-sm">Step 2 of 3</label>
          <br />
          <div className="py-5"></div>
          <h1 className="text-5xl mb-5">
            Who else is on the <br/> naveens workspace<br/> team?
          </h1>
          
          <div className="py-3"></div>

          <TextField
            size="small"
            className="md:w-[50%] w-[100%]"
            variant="outlined"
            placeholder="Ex: Acme Marketing or Acme Co"
            multiline
            rows={5}
          />
          <br />

          <div className="py-10"></div>

          <Button variant="contained" className="md:w-48 w-full" color="primary" autoFocus>
            NEXT
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Step2;
