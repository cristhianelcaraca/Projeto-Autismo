import "./App.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Diagnosis from "./Pages/Diagnosis";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostico" element={<Diagnosis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
