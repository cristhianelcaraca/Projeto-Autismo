import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useLocalizedPath from "../hooks/useLocalizedPath";

function Breadcrumbs({ pageKey }) {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  if (!pageKey || pageKey === "home" || pageKey === "search") {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li>
            <Link to={localizedPath("/")}>{t("breadcrumbs.home")}</Link>
          </li>

          <li className="breadcrumb-current" aria-current="page">
            {t(`breadcrumbs.${pageKey}`)}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
