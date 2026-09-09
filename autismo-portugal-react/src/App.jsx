import "./App.css";

import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LanguageLayout from "./Components/LanguageLayout";

import Home from "./Pages/Home";

/*
  As restantes páginas são carregadas
  apenas quando forem necessárias.
*/
const Diagnosis = lazy(() => import("./Pages/Diagnosis"));

const Suspicion = lazy(() => import("./Pages/Suspicion"));

const Evaluation = lazy(() => import("./Pages/Evaluation"));

const AfterDiagnosis = lazy(() => import("./Pages/AfterDiagnosis"));

const SchoolRights = lazy(() => import("./Pages/SchoolRights"));

const SupportMeasures = lazy(() => import("./Pages/SupportMeasures"));

const PEI = lazy(() => import("./Pages/PEI"));

const AnxietyCrises = lazy(() => import("./Pages/AnxietyCrises"));

const AMIM = lazy(() => import("./Pages/AMIM"));

const PSI = lazy(() => import("./Pages/PSI"));

const Benefits = lazy(() => import("./Pages/Benefits"));

const OverloadCrises = lazy(() => import("./Pages/OverloadCrises"));

const Anxiety = lazy(() => import("./Pages/Anxiety"));

const RoutineOrganization = lazy(() => import("./Pages/RoutineOrganization"));

const Resources = lazy(() => import("./Pages/Resources"));

const About = lazy(() => import("./Pages/About"));

const SearchResults = lazy(() => import("./Pages/SearchResults"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loading">A carregar...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/pt" replace />} />

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

            <Route
              path="rotina-organizacao"
              element={<RoutineOrganization />}
            />

            <Route path="recursos" element={<Resources />} />

            <Route path="sobre-nos" element={<About />} />

            <Route path="pesquisa" element={<SearchResults />} />
          </Route>

          <Route path="*" element={<Navigate to="/pt" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
