import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Diagnosis from "./Pages/Diagnosis";
import Suspicion from "./Pages/Suspicion";
import Evaluation from "./Pages/Evaluation";
import AfterDiagnosis from "./Pages/AfterDiagnosis";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostico" element={<Diagnosis />} />
        <Route path="/suspeita" element={<Suspicion />} />
        <Route path="/avaliacao" element={<Evaluation />} />
        <Route path="/depois-diagnostico" element={<AfterDiagnosis />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
