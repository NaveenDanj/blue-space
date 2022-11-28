import { useEffect , useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./providers/AuthProvider";
import Channels from "./views/App/Channels";
import DirectMessages from "./views/App/DirectMessages";
import DraftAndSent from "./views/App/DraftAndSent";
import Files from "./views/App/Files";
import Home from "./views/App/Home";
import PeopleAndGroups from "./views/App/PeopleAndGroups";
import Saved from "./views/App/Saved";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Loader from "./views/Loader";
import Step1 from "./views/SetupWorkspace/Step1";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Loader />}/>
          
          <Route exact path='/app' element={<PrivateRoute/>}>
            <Route exact path='/app' element={<Home/>}/>
            <Route path="/app/direct-messages"  element={<DirectMessages />} />
            <Route path="/app/saved"  element={<Saved />} />
            <Route path="/app/draft"  element={<DraftAndSent />} />
            <Route path="/app/peoples-and-group"  element={<PeopleAndGroups />} />
            <Route path="/app/files"  element={<Files />} />
            <Route path="/app/channels"  element={<Channels />} />
          </Route>

          <Route path="/workspace" element={<Step1 />}  />

          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
