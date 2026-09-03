import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-item">
            <i className="bi bi-shield-check footer-icon"></i>

            <p>
              {t("footer.reliableSources.line1")}
              <br />
              {t("footer.reliableSources.line2")}
            </p>
          </div>

          <div className="footer-item">
            <i className="bi bi-people footer-icon"></i>

            <p>
              {t("footer.simpleLanguage.line1")}
              <br />
              {t("footer.simpleLanguage.line2")}
            </p>
          </div>

          <div className="footer-item">
            <i className="bi bi-lock footer-icon"></i>

            <p>
              {t("footer.privacy.line1")}
              <br />
              {t("footer.privacy.line2")}
            </p>
          </div>
        </div>
      </footer>

      <div className="credits-item">
        <small>
          {t("footer.createdBy")}{" "}
          <a
            href="https://www.linkedin.com/in/cris-cara%C3%A7a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cristhiane Caraça
          </a>{" "}
          {t("footer.openSource")}{" "}
          <a
            href="https://github.com/cristhianelcaraca/Projeto-Autismo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </small>
      </div>
    </>
  );
}

export default Footer;
