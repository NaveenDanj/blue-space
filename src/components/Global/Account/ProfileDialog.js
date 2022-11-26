import React , {useEffect, useState , useRef} from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";

import { doc, updateDoc , getDoc} from "firebase/firestore";
import { setCurrentUserDoc } from "../../../redux/user/userSlice";

import { db } from "../../../util/firestore";
import Loader from "../Loader";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function ProfileDialog(props) {
  const [open, setOpen] = React.useState(false);
  const userDocData = useSelector((state) => state.currentUser.currentUserDoc);
  const dispatch = useDispatch();

  const [displayName , setDisplayName] = useState(userDocData.displayName || '');
  const [fullname , setFullname] = useState(userDocData.fullname || '');
  const [title , setTitle] = useState(userDocData.title || '');
  const [namePronunciation , setNamePronunciation] = useState(userDocData.namePronunciation || '');
  const [error , setError] = useState('');
  const [success , setSuccess] = useState(false);
  const [loader , setLoader] = useState(false);


  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loadUserData = async() => {
    const userDocRef = doc(db , 'users' , userDocData.uid);
    let userDoc = await getDoc(userDocRef);
    
    if(userDoc.exists){
      dispatch(setCurrentUserDoc(userDoc.data()));
    }

  }

  useEffect(() => {
    loadUserData();
  } , []);

  const handleSaveChanges = async() => {

    setError('');
    setSuccess(false);
    
    if(displayName === '' || fullname === '' || title === '' || namePronunciation === '' ){
      setError('Please fill out the form!');
    }

    try{
      setLoader(true);
      const userDocRef = doc(db , 'users' , userDocData.uid);

      await updateDoc(userDocRef, {
        fullname,
        namePronunciation,
        title,
        displayName
      });

      setLoader(false);
      setSuccess(true);

    }catch(err){
      setError(err);
      setLoader(false);
      setSuccess(false);
    }

  }


  return (
    <div className="mx-auto">

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <IconButton className="my-auto" onClick={handleClickOpen}>
          <Avatar className="cursor-pointer" style={{ width: 30, height: 30 }}>
            {userDocData && (<img
              style={{ width: 37, height: 37 }}
              alt=""
              className="mb-2 rounded-sm"
              src={userDocData.photoURL}
            />)}
          </Avatar>
        </IconButton>

        
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
            <Loader open={loader} />

          <DialogContent className=" h-96">
            <DialogContentText
              className="grid grid-cols-3 gap-4"
              id="alert-dialog-description"
            >

              <div className="mt-5 col-span-2">

                {error !== '' && <Alert className="mb-4 mt-2" severity="error">{error}</Alert>}
                {success && <Alert className="mb-4 mt-2" severity="success">Profile details updated successfully.</Alert>}

                <div>
                  <label>Full name</label>
                  <TextField
                    defaultValue={fullname}
                    size="small"
                    className="w-full"
                    variant="outlined"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="mt-5">
                  <label>Display name</label>
                  <TextField
                    value={displayName}
                    size="small"
                    className="text-white w-full"
                    variant="outlined"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                  <label className="text-xs">
                    This could be your first name, or a nickname — however you’d
                    like people to refer to you in Slack.
                  </label>
                </div>

                <div className="mt-5">
                  <label>Title</label>
                  <TextField
                    value={title}
                    size="small"
                    className="text-white w-full"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="text-xs">
                    Let people know what you do at ShiftX Tech.
                  </label>
                </div>

                <div className="mt-5">
                  <label>Name pronunciation</label>
                  <TextField
                    value={namePronunciation}
                    size="small"
                    className="text-white w-full"
                    variant="outlined"
                    onChange={(e) => setNamePronunciation(e.target.value)}
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
                    src={userDocData.photoURL}
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
              autoFocus
              className="text-white"
              style={{ color: "white" }}
              onClick={handleSaveChanges}
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
