import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Diagnosis from "./Pages/Diagnosis";
import Suspicion from "./Pages/Suspicion";
import Evaluation from "./Pages/Evaluation";
import AfterDiagnosis from "./Pages/AfterDiagnosis";
import SchoolRights from "./Pages/SchoolRights";
import SupportMeasures from "./Pages/SupportMeasures";
import PEI from "./Pages/PEI";
import AnxietyCrises from "./Pages/AnxietyCrises";
import AMIM from "./Pages/AMIM";
import PSI from "./Pages/PSI";
import Benefits from "./Pages/Benefits";
import OverloadCrises from "./Pages/OverloadCrises";
import Anxiety from "./Pages/Anxiety";
import RoutineOrganization from "./Pages/RoutineOrganization";
import Resources from "./Pages/Resources";

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
        <Route path="/direitos-escola" element={<SchoolRights />} />
        <Route path="/medidas-suporte" element={<SupportMeasures />} />
        <Route path="/PEI" element={<PEI />} />
        <Route path="/ansiedade-crises" element={<AnxietyCrises />} />
        <Route path="/amim" element={<AMIM />} />
        <Route path="/psi" element={<PSI />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/crises-sobrecarga" element={<OverloadCrises />} />
        <Route path="/ansiedade" element={<Anxiety />} />
        <Route path="/rotina-organizacao" element={<RoutineOrganization />} />
        <Route path="/recursos" element={<Resources />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
