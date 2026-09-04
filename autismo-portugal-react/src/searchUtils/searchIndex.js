import flattenText from "./flattenText";

/* =========================
   PORTUGUÊS
========================= */

import suspicionPT from "../locales/pt/suspicion";
import autismQuizPT from "../locales/pt/autismQuiz";
import evaluationPT from "../locales/pt/evaluation";
import diagnosisPT from "../locales/pt/diagnosis";
import afterDiagnosisPT from "../locales/pt/afterDiagnosis";
import schoolRightsPT from "../locales/pt/schoolRights";
import supportMeasuresPT from "../locales/pt/supportMeasures";
import peiPT from "../locales/pt/pei";
import anxietyCrisesPT from "../locales/pt/anxietyCrises";
import amimPT from "../locales/pt/amim";
import psiPT from "../locales/pt/psi";
import benefitsPT from "../locales/pt/benefits";
import overloadCrisesPT from "../locales/pt/overloadCrises";
import anxietyPT from "../locales/pt/anxiety";
import routineOrganizationPT from "../locales/pt/routineOrganization";
import resourcesPT from "../locales/pt/resources";
import aboutPT from "../locales/pt/about";

/* =========================
   ENGLISH
========================= */

import suspicionEN from "../locales/en/suspicion";
import autismQuizEN from "../locales/en/autismQuiz";
import evaluationEN from "../locales/en/evaluation";
import diagnosisEN from "../locales/en/diagnosis";
import afterDiagnosisEN from "../locales/en/afterDiagnosis";
import schoolRightsEN from "../locales/en/schoolRights";
import supportMeasuresEN from "../locales/en/supportMeasures";
import peiEN from "../locales/en/pei";
import anxietyCrisesEN from "../locales/en/anxietyCrises";
import amimEN from "../locales/en/amim";
import psiEN from "../locales/en/psi";
import benefitsEN from "../locales/en/benefits";
import overloadCrisesEN from "../locales/en/overloadCrises";
import anxietyEN from "../locales/en/anxiety";
import routineOrganizationEN from "../locales/en/routineOrganization";
import resourcesEN from "../locales/en/resources";
import aboutEN from "../locales/en/about";

/* =========================
   CRIAR ITEM DE PESQUISA
========================= */

function createSearchItem(
  route,
  title,
  contentObject,
  snippetObject = contentObject,
) {
  return {
    route,
    title,

    // Conteúdo completo utilizado para encontrar resultados
    content: flattenText(contentObject),

    // Conteúdo limpo utilizado apenas para mostrar o snippet
    snippetContent: flattenText(snippetObject, {
      forSnippet: true,
    }),
  };
}

/* =========================
   ÍNDICE PORTUGUÊS
========================= */

const searchIndexPT = [
  createSearchItem(
    "/suspeita",
    "Suspeita de autismo",
    {
      suspicion: suspicionPT,
      quiz: autismQuizPT,
    },
    suspicionPT,
  ),

  createSearchItem("/avaliacao", "Avaliação", evaluationPT),

  createSearchItem("/diagnostico", "Diagnóstico", diagnosisPT),

  createSearchItem(
    "/depois-diagnostico",
    "Depois do diagnóstico",
    afterDiagnosisPT,
  ),

  createSearchItem("/direitos-escola", "Direitos na escola", schoolRightsPT),

  createSearchItem("/medidas-suporte", "Medidas de suporte", supportMeasuresPT),

  createSearchItem("/pei", "PEI", peiPT),

  createSearchItem(
    "/ansiedade-crises",
    "Ansiedade e crises na escola",
    anxietyCrisesPT,
  ),

  createSearchItem("/amim", "AMIM", amimPT),

  createSearchItem("/psi", "Prestação Social para a Inclusão", psiPT),

  createSearchItem("/beneficios-apoios", "Benefícios e apoios", benefitsPT),

  createSearchItem(
    "/crises-sobrecarga",
    "Crises e sobrecarga",
    overloadCrisesPT,
  ),

  createSearchItem("/ansiedade", "Ansiedade", anxietyPT),

  createSearchItem(
    "/rotina-organizacao",
    "Rotina e organização",
    routineOrganizationPT,
  ),

  createSearchItem("/recursos", "Recursos", resourcesPT),

  createSearchItem("/sobre-nos", "Sobre nós", aboutPT),
];

/* =========================
   ÍNDICE ENGLISH
========================= */

const searchIndexEN = [
  createSearchItem(
    "/suspeita",
    "Suspected autism",
    {
      suspicion: suspicionEN,
      quiz: autismQuizEN,
    },
    suspicionEN,
  ),

  createSearchItem("/avaliacao", "Assessment", evaluationEN),

  createSearchItem("/diagnostico", "Diagnosis", diagnosisEN),

  createSearchItem("/depois-diagnostico", "After diagnosis", afterDiagnosisEN),

  createSearchItem("/direitos-escola", "Rights at school", schoolRightsEN),

  createSearchItem("/medidas-suporte", "Support measures", supportMeasuresEN),

  createSearchItem("/pei", "PEI", peiEN),

  createSearchItem(
    "/ansiedade-crises",
    "Anxiety and crises at school",
    anxietyCrisesEN,
  ),

  createSearchItem("/amim", "AMIM", amimEN),

  createSearchItem("/psi", "Social Inclusion Benefit", psiEN),

  createSearchItem("/beneficios-apoios", "Benefits and support", benefitsEN),

  createSearchItem(
    "/crises-sobrecarga",
    "Crises and overload",
    overloadCrisesEN,
  ),

  createSearchItem("/ansiedade", "Anxiety", anxietyEN),

  createSearchItem(
    "/rotina-organizacao",
    "Routine and organisation",
    routineOrganizationEN,
  ),

  createSearchItem("/recursos", "Resources", resourcesEN),

  createSearchItem("/sobre-nos", "About us", aboutEN),
];

/* =========================
   ESCOLHER ÍNDICE PELO IDIOMA
========================= */

export function getSearchIndex(language) {
  const currentLanguage = String(language || "pt")
    .toLowerCase()
    .split("-")[0];

  return currentLanguage === "en" ? searchIndexEN : searchIndexPT;
}
