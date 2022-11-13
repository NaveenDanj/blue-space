import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectMessages from "./views/App/DirectMessages";
import Home from "./views/App/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/direct-messages" index element={<DirectMessages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
