import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function ProfileDialog() {
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
        <Avatar className="cursor-pointer" style={{ width: 30, height: 30 }}>
          N
        </Avatar>
      </IconButton>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ sx: { maxWidth: 750 } }}
        >
          <DialogTitle
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
            className="flex justify-between"
            id="alert-dialog-title"
          >
            <label className="my-auto">Edit your profile</label>

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

          <DialogContent className=" h-96">
            <DialogContentText
              className="grid grid-cols-3 gap-4"
              id="alert-dialog-description"
            >
              <div className="mt-5 col-span-2">
                <div>
                  <label>Full name</label>
                  <TextField
                    placeholder="# e.g. plan-budget"
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </div>

                <div className="mt-5">
                  <label>Display name</label>
                  <TextField
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <label className="text-xs">
                    This could be your first name, or a nickname — however you’d
                    like people to refer to you in Slack.
                  </label>
                </div>

                <div className="mt-5">
                  <label>Title</label>
                  <TextField
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <label className="text-xs">
                    Let people know what you do at ShiftX Tech.
                  </label>
                </div>

                <div className="mt-5">
                  <label>Name pronunciation</label>
                  <TextField
                    size="small"
                    className="text-white w-full"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <label className="text-xs">
                    This could be a phonetic pronunciation, or an example of
                    something your name sounds like.
                  </label>
                </div>
              </div>

              <div className="ml-2 mt-5">
                <div className="">
                  <label>Profile photo</label>
                  <img
                    alt=""
                    className="mb-2 rounded-sm"
                    style={{ width: 210, height: 200 }}
                    src="https://avatars.githubusercontent.com/u/48654030?v=4"
                  />
                  <Button
                    variant="outlined"
                    color="success"
                    autoFocus
                    className="text-white w-[100%]"
                    style={{ color: "white" }}
                  >
                    Upload Photo
                  </Button>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              autoFocus
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={handleClose}
              autoFocus
              className="text-white"
              style={{ color: "white" }}
            >
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default ProfileDialog;
