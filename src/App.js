import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/direct-messages" index element={<DirectMessages />} />
        <Route path="/saved" index element={<Saved />} />
        <Route path="/draft" index element={<DraftAndSent />} />
        <Route path="/peoples-and-group" index element={<PeopleAndGroups />} />
        <Route path="/files" index element={<Files />} />
        <Route path="/channels" index element={<Channels />} />
        <Route path="/auth/register" index element={<Register />} />
        <Route path="/auth/login" index element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
