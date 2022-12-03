import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useParams} from "react-router-dom";
import {doc, updateDoc , getDoc , arrayUnion , setDoc , Timestamp} from "firebase/firestore"; 
import { db } from '../../util/firestore';
import { useSelector } from 'react-redux'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Global/Loader";
import Alert from '@mui/material/Alert';


const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function Step3() {

  let {id} = useParams();
  const userDocData = useSelector((state) => state.currentUser.currentUserDoc);

  const [channelName , setChannelName] = useState('');
  const [error , setError] = useState('');
  const [loading , setLoading] = useState('');
  const navigate = useNavigate();


  const loadWorkspaceData = async () => {
    const docRef = await getDoc(doc(db , id , 'meta'));

    if(!docRef.exists()){
      console.log('not exists')
      return;
      // handle later
    }

    if(docRef.data().owner !== userDocData.uid){
      console.log('unauth user!');
      return;
      // handle later
    }

    console.log(docRef.exists());

  }

  useEffect(() => {
    loadWorkspaceData();
  } ,[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try{
      
      await updateDoc(doc(db, id, 'meta'), {
        channels: arrayUnion(channelName)
      });

      await setDoc(doc(db, id + `/channels/${channelName}` , 'meta' ), {
        channelName,
        createdAt : Timestamp.fromDate(new Date()),
        owner : userDocData.uid,
        members : [],
      });

      localStorage.setItem('currentWorksSpace' , id);

      setLoading(false);
      setError('');

      navigate(`/app`);  

    }catch(err){
      console.log(err);
      setLoading(false);
      setError('Something went wrong. Please try again!');
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="h-[100vh] bg-[#1A1D21] p-10">
        <Loader open={loading} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="text-sm">Step 3 of 3</label>
          <br />
          <div className="py-5"></div>
          <h1 className="text-5xl mb-5">
            What’s your team working on
            <br /> right now?
          </h1>
          <label>
            This could be anything: a project, campaign, event, or the deal
            you’re trying to close.
          </label>
          <br />

          <div className="py-3"></div>
          {error !== '' && <Alert className="mb-4 mt-2" severity="error">{error}</Alert>}

          <TextField
            size="small"
            className="md:w-[50%] w-[100%]"
            variant="outlined"
            placeholder="Ex: Acme Marketing or Acme Co"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          <br />

          <div className="py-10"></div>

          <Button
            variant="contained"
            className="md:w-48 w-full"
            color="primary"
            autoFocus
            type="submit"
          >
            NEXT
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Step3;
