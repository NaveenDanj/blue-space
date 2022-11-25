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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/app' element={<PrivateRoute/>}>
            <Route exact path='/app' element={<Home/>}/>
            <Route path="/app/direct-messages" index element={<DirectMessages />} />
            <Route path="/app/saved" index element={<Saved />} />
            <Route path="/app/draft" index element={<DraftAndSent />} />
            <Route path="/app/peoples-and-group" index element={<PeopleAndGroups />} />
            <Route path="/app/files" index element={<Files />} />
            <Route path="/app/channels" index element={<Channels />} />
          </Route>

          <Route path="/auth/register" index element={<Register />} />
          <Route path="/auth/login" index element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
