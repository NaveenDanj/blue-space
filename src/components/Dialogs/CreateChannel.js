import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function CreateChannel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mx-auto">
      <IconButton className="my-auto" onClick={handleClickOpen}>
        <AddOutlinedIcon
          style={{ fontSize: 20 }}
          className="text-white text-sm my-auto"
        />
      </IconButton>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ sx: { maxWidth: 550 } }}
        >
          <DialogTitle className="flex justify-between" id="alert-dialog-title">
            <h2 className="my-auto">Create a channel</h2>

            <IconButton
              onClick={handleClose}
              className="my-auto"
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <label>
                Channels are where your team communicates. They’re best when
                organized around a topic — #marketing, for example.
              </label>

              <div className="mt-5">
                <div>
                  <label>Name</label>
                  <TextField
                    placeholder="# e.g. plan-budget"
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </div>

                <div className="mt-5">
                  <label>Description (optional)</label>
                  <TextField
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <label className="text-xs">What’s this channel about?</label>
                </div>

                <div className="flex justify-between mt-5">
                    
                    <div className=" flex flex-col my-auto">
                        <label>Make private</label>
                        <label className="max-w-md">When a channel is set to private, it can only be viewed or joined by invitation.</label>
                    </div>

                    <div className="my-auto">
                        <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
                    </div>
                
                </div>

              </div>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" color="primary" onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default CreateChannel;
