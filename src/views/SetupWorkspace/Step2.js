import React, { useEffect , useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useParams} from "react-router-dom";

import { db } from '../../util/firestore';
import {doc, updateDoc , getDoc} from "firebase/firestore"; 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Global/Loader";


const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function Step2() {

  let {id} = useParams();
  const userDocData = useSelector((state) => state.currentUser.currentUserDoc);
  const [error , setError] = useState('');
  const [loading , setLoading] = useState(false);
  const [description , setDescription] = useState('');
  const navigate = useNavigate();

  const loadWorkspaceData = async () => {
    const docRef = await getDoc(doc(db , id , 'meta'));
    console.log('exists' , docRef);

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

  }

  useEffect(() => {
    loadWorkspaceData();
  } , [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try{
      await updateDoc(doc(db, id, 'meta'), {
        description
      });
      setLoading(false);
      setError('');  
      navigate(`/workspace/step3/${id}`);
      
    }catch(err){
      setLoading(false);
      setError('Something went wrong. Please try again!');
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="h-[100vh] bg-[#1A1D21] p-10">
        <Loader open={loading} />
        <form onSubmit={handleSubmit}>
          <label className="text-sm">Step 2 of 3</label>
          <br />
          <div className="py-5"></div>
          <h1 className="text-5xl mb-5">
            Give a<br/> Description for Your<br/> workspace
          </h1>
          
          <div className="py-3"></div>

          {error !== '' && <Alert className="mb-4 mt-2" severity="error">{error}</Alert>}

          <TextField
            size="small"
            className="md:w-[50%] w-[100%]"
            variant="outlined"
            placeholder="Ex: Acme Marketing or Acme Co"
            multiline
            rows={5}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <div className="py-10"></div>

          <Button type="submit" variant="contained" className="md:w-48 w-full" color="primary" autoFocus>
            NEXT
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Step2;
