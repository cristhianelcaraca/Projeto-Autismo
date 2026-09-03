import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/autismo_portugal_logo.png"
            alt="Autismo Portugal"
            width="55"
            className="me-2"
          />

          <span>
            <strong>AUTISMO</strong>
            <br />
            <small>PORTUGAL</small>
          </span>
        </Link>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label={t("navbar.openMenu")}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* Início */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("navbar.home")}
              </Link>
            </li>

            {/* Diagnóstico */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle navbar-dropdown-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.diagnosis")}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/suspeita">
                    {t("navbar.suspicion")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/avaliacao">
                    {t("navbar.evaluation")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/diagnostico">
                    {t("navbar.diagnosis")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/depois-diagnostico">
                    {t("navbar.afterDiagnosis")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Escola */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle navbar-dropdown-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.school")}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/direitos-escola">
                    {t("navbar.schoolRights")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/medidas-suporte">
                    {t("navbar.supportMeasures")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/PEI">
                    {t("navbar.pei")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ansiedade-crises">
                    {t("navbar.anxietyCrises")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Direitos e Apoios */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle navbar-dropdown-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.rightsSupport")}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/amim">
                    AMIM
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/psi">
                    {t("navbar.psi")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/benefits">
                    {t("navbar.benefits")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Vida diária */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle navbar-dropdown-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.dailyLife")}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/crises-sobrecarga">
                    {t("navbar.overloadCrises")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ansiedade">
                    {t("navbar.anxiety")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/rotina-organizacao">
                    {t("navbar.routine")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Recursos */}
            <li className="nav-item">
              <Link className="nav-link" to="/recursos">
                {t("navbar.resources")}
              </Link>
            </li>

            {/* Sobre */}
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos">
                {t("navbar.about")}
              </Link>
            </li>

            {/* Idioma */}
            <li className="nav-item ms-lg-3">
              <div className="lang-toggle">
                <button
                  type="button"
                  className={`lang-option ${
                    i18n.language === "pt" ? "active" : ""
                  }`}
                  onClick={() => changeLanguage("pt")}
                >
                  PT
                </button>

                <button
                  type="button"
                  className={`lang-option ${
                    i18n.language === "en" ? "active" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
