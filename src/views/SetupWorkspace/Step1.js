import React, { useState  } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../util/firestore';
import {doc , setDoc , Timestamp} from "firebase/firestore"; 
import Loader from "../../components/Global/Loader";



const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function Step1() {

  const [workspaceName , setWorkspaceName] = useState('');
  const [error , setError] = useState('');
  const userDocData = useSelector((state) => state.currentUser.currentUserDoc);
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(workspaceName === ''){
      setError('Workspace name is required!');
      return;
    }

    try{
      setLoading(true);
      setError('');
      let workspaceId = uuidv4().replaceAll('-' ,'');
      await setDoc(doc(db, workspaceId , 'meta' ), {
        workspaceName,
        createdAt : Timestamp.fromDate(new Date()),
        owner : userDocData.uid,
        members : [],
        channels : [],
        workspaceId
      });

      setLoading(false);
      navigate(`/workspace/step2/${workspaceId}`);

    }catch(err){
      setError('err');
      setLoading(false);
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="h-[100vh] bg-[#1A1D21] p-10">
        <Loader open={loading} />
        <form onSubmit={handleSubmit}>
          <label className="text-sm">Step 1 of 3</label>
          <br />
          <div className="py-5"></div>
          <h1 className="text-5xl mb-5">
            What’s the name of your <br /> company or team?
          </h1>
          <label>
            This will be the name of your Blue Space workspace — choose something
            that your team will recognize.
          </label>
          <br />
          <div className="py-3"></div>

          {error !== '' && <Alert className="mb-4 mt-2" severity="error">{error}</Alert>}

          <TextField
            onChange={(e) => setWorkspaceName(e.target.value)}
            size="small"
            className="md:w-[50%] w-[100%]"
            variant="outlined"
            placeholder="Ex: Acme Marketing or Acme Co"
            value={workspaceName}
            required
          />
          <br />

          <div className="py-10"></div>

          <Button type='submit' variant="contained" className="md:w-48 w-full" color="primary" autoFocus>
            NEXT
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Step1;
