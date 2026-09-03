import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarPT from "../locales/pt/navbar";
import heroPT from "../locales/pt/hero";
import helpPT from "../locales/pt/help";
import articlesPT from "../locales/pt/articles";
import aboutUsPT from "../locales/pt/aboutUs";
import footerPT from "../locales/pt/footer";
import aboutPT from "../locales/pt/about";
import afterDiagnosisPT from "../locales/pt/afterDiagnosis";
import amimPT from "../locales/pt/amim";
import anxietyPT from "../locales/pt/anxiety";
import anxietyCrisesPT from "../locales/pt/anxietyCrises";
import benefitsPT from "../locales/pt/benefits";
import diagnosisPT from "../locales/pt/diagnosis";
import evaluationPT from "../locales/pt/evaluation";
import overloadCrisesPT from "../locales/pt/overloadCrises";
import peiPT from "../locales/pt/pei";
import psiPT from "../locales/pt/psi";
import resourcesPT from "../locales/pt/resources";
import routineOrganizationPT from "../locales/pt/routineOrganization";
import schoolRightsPT from "../locales/pt/schoolRights";
import supportMeasuresPT from "../locales/pt/supportMeasures";
import suspicionPT from "../locales/pt/suspicion";
import autismQuizPT from "../locales/pt/autismQuiz";

import navbarEN from "../locales/en/navbar";
import heroEN from "../locales/en/hero";
import helpEN from "../locales/en/help";
import articlesEN from "../locales/en/articles";
import aboutUsEN from "../locales/en/aboutUs";
import footerEN from "../locales/en/footer";
import aboutEN from "../locales/en/about";
import afterDiagnosisEN from "../locales/en/afterDiagnosis";
import amimEN from "../locales/en/amim";
import anxietyEN from "../locales/en/anxiety";
import anxietyCrisesEN from "../locales/en/anxietyCrises";
import benefitsEN from "../locales/en/benefits";
import diagnosisEN from "../locales/en/diagnosis";
import evaluationEN from "../locales/en/evaluation";
import overloadCrisesEN from "../locales/en/overloadCrises";
import peiEN from "../locales/en/pei";
import psiEN from "../locales/en/psi";
import resourcesEN from "../locales/en/resources";
import routineOrganizationEN from "../locales/en/routineOrganization";
import schoolRightsEN from "../locales/en/schoolRights";
import supportMeasuresEN from "../locales/en/supportMeasures";
import suspicionEN from "../locales/en/suspicion";
import autismQuizEN from "../locales/en/autismQuiz";

const savedLanguage = localStorage.getItem("language") || "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        navbar: navbarPT,
        hero: heroPT,
        help: helpPT,
        articles: articlesPT,
        aboutUs: aboutUsPT,
        footer: footerPT,
        about: aboutPT,
        afterDiagnosis: afterDiagnosisPT,
        amim: amimPT,
        anxiety: anxietyPT,
        anxietyCrises: anxietyCrisesPT,
        benefits: benefitsPT,
        diagnosis: diagnosisPT,
        evaluation: evaluationPT,
        overloadCrises: overloadCrisesPT,
        pei: peiPT,
        psi: psiPT,
        resources: resourcesPT,
        routineOrganization: routineOrganizationPT,
        schoolRights: schoolRightsPT,
        supportMeasures: supportMeasuresPT,
        suspicion: suspicionPT,
        autismQuiz: autismQuizPT,
      },
    },

    en: {
      translation: {
        navbar: navbarEN,
        hero: heroEN,
        help: helpEN,
        articles: articlesEN,
        aboutUs: aboutUsEN,
        footer: footerEN,
        about: aboutEN,
        afterDiagnosis: afterDiagnosisEN,
        amim: amimEN,
        anxiety: anxietyEN,
        anxietyCrises: anxietyCrisesEN,
        benefits: benefitsEN,
        diagnosis: diagnosisEN,
        evaluation: evaluationEN,
        overloadCrises: overloadCrisesEN,
        pei: peiEN,
        psi: psiEN,
        resources: resourcesEN,
        routineOrganization: routineOrganizationEN,
        schoolRights: schoolRightsEN,
        supportMeasures: supportMeasuresEN,
        suspicion: suspicionEN,
        autismQuiz: autismQuizEN,
      },
    },
  },

  lng: savedLanguage,
  fallbackLng: "pt",

  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = savedLanguage;

export default i18n;
