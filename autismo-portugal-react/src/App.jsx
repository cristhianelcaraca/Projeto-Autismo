import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LanguageLayout from "./Components/LanguageLayout";

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
import About from "./Pages/About";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entrada principal */}
        <Route path="/" element={<Navigate to="/pt" replace />} />

        {/* Portal bilingue */}
        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />

          <Route path="diagnostico" element={<Diagnosis />} />

          <Route path="suspeita" element={<Suspicion />} />

          <Route path="avaliacao" element={<Evaluation />} />

          <Route path="depois-diagnostico" element={<AfterDiagnosis />} />

          <Route path="direitos-escola" element={<SchoolRights />} />

          <Route path="medidas-suporte" element={<SupportMeasures />} />

          <Route path="pei" element={<PEI />} />

          <Route path="ansiedade-crises" element={<AnxietyCrises />} />

          <Route path="amim" element={<AMIM />} />

          <Route path="psi" element={<PSI />} />

          <Route path="beneficios-apoios" element={<Benefits />} />

          <Route path="crises-sobrecarga" element={<OverloadCrises />} />

          <Route path="ansiedade" element={<Anxiety />} />

          <Route path="rotina-organizacao" element={<RoutineOrganization />} />

          <Route path="recursos" element={<Resources />} />

          <Route path="sobre-nos" element={<About />} />

          <Route path="pesquisa" element={<SearchResults />} />
        </Route>

        {/* URL desconhecida */}
        <Route path="*" element={<Navigate to="/pt" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
