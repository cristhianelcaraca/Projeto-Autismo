import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useLocalizedPath from "../hooks/useLocalizedPath";

function Help() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="help-section">
      <div className="container">
        <h2 className="help-title">{t("help.title")}</h2>

        <span className="heart">
          <img src="/images/rainbow.png" alt="" aria-hidden="true" />
        </span>

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          <div className="col">
            <div className="help-card">
              <div className="help-icon bg-purple">
                <i className="bi bi-search"></i>
              </div>

              <h3>{t("help.diagnosis.title")}</h3>

              <p>{t("help.diagnosis.description")}</p>

              <Link
                to={localizedPath("/diagnostico")}
                className="help-link text-purple"
              >
                {t("help.learnMore")} →
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="help-card">
              <div className="help-icon bg-green">
                <i className="bi bi-house"></i>
              </div>

              <h3>{t("help.school.title")}</h3>

              <p>{t("help.school.description")}</p>

              <Link
                to={localizedPath("/direitos-escola")}
                className="help-link text-green"
              >
                {t("help.learnMore")} →
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="help-card">
              <div className="help-icon bg-yellow">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("help.rights.title")}</h3>

              <p>{t("help.rights.description")}</p>

              <Link
                to={localizedPath("/beneficios-apoios")}
                className="help-link text-yellow"
              >
                {t("help.learnMore")} →
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="help-card">
              <div className="help-icon bg-pink">
                <i className="bi bi-heart"></i>
              </div>

              <h3>{t("help.dailyLife.title")}</h3>

              <p>{t("help.dailyLife.description")}</p>

              <Link
                to={localizedPath("/rotina-organizacao")}
                className="help-link text-pink"
              >
                {t("help.learnMore")} →
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="help-card">
              <div className="help-icon bg-blue">
                <i className="bi bi-book"></i>
              </div>

              <h3>{t("help.resources.title")}</h3>

              <p>{t("help.resources.description")}</p>

              <Link
                to={localizedPath("/recursos")}
                className="help-link text-blue"
              >
                {t("help.learnMore")} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
