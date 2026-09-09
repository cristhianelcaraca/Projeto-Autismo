import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import Breadcrumbs from "./Breadcrumbs";

const supportedLanguages = ["pt", "en"];

const seoRoutes = {
  "": "home",
  "/": "home",

  "/suspeita": "suspicion",
  "/avaliacao": "evaluation",
  "/diagnostico": "diagnosis",
  "/depois-diagnostico": "afterDiagnosis",

  "/direitos-escola": "schoolRights",
  "/medidas-suporte": "supportMeasures",
  "/pei": "pei",
  "/ansiedade-crises": "anxietyCrises",

  "/amim": "amim",
  "/psi": "psi",
  "/beneficios-apoios": "benefits",

  "/crises-sobrecarga": "overloadCrises",
  "/ansiedade": "anxiety",
  "/rotina-organizacao": "routine",

  "/recursos": "resources",
  "/sobre-nos": "about",

  "/pesquisa": "search",
};

function LanguageLayout() {
  const { lang } = useParams();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!supportedLanguages.includes(lang)) {
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";

    localStorage.setItem("language", lang);
  }, [lang, i18n]);

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/pt" replace />;
  }

  const pagePath = pathname.replace(/^\/(pt|en)/, "");

  const seoKey = seoRoutes[pagePath] || "home";

  const breadcrumbLabel =
    seoKey !== "home" && seoKey !== "search"
      ? t(`breadcrumbs.${seoKey}`)
      : null;

  return (
    <>
      <SEO
        title={t(`seo.${seoKey}.title`)}
        description={t(`seo.${seoKey}.description`)}
        language={lang}
        pagePath={pagePath}
        noIndex={seoKey === "search"}
        breadcrumbLabel={breadcrumbLabel}
      />

      <Navbar />

      <Breadcrumbs pageKey={seoKey} />

      <Outlet />

      <Footer />
    </>
  );
}

export default LanguageLayout;
