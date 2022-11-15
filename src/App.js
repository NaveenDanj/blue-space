import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectMessages from "./views/App/DirectMessages";
import Home from "./views/App/Home";
import Saved from "./views/App/Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/direct-messages" index element={<DirectMessages />} />
        <Route path="/saved" index element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
