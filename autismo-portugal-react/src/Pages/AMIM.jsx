import { useTranslation } from "react-i18next";
import "./AMIM.css";

function AMIM() {
  const { t } = useTranslation();

  return (
    <main className="amim-page">
      {/* HERO */}
      <section className="amim-hero">
        <div className="container amim-container">
          <div className="amim-hero-content">
            <div className="amim-hero-text">
              <span className="amim-label">{t("amim.hero.label")}</span>

              <h1>{t("amim.hero.title")}</h1>

              <p>{t("amim.hero.description")}</p>
            </div>

            <div className="amim-hero-image">
              <img src="/images/doctor.png" alt={t("amim.hero.imageAlt")} />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="amim-what">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">{t("amim.what.label")}</span>

            <h2>{t("amim.what.title")}</h2>

            <p>{t("amim.what.description")}</p>
          </div>

          <div className="amim-difference-grid">
            <article className="amim-difference-card diagnosis">
              <div className="amim-difference-icon">
                <i className="bi bi-clipboard2-pulse"></i>
              </div>

              <h3>{t("amim.what.diagnosis.title")}</h3>

              <p>{t("amim.what.diagnosis.description")}</p>
            </article>

            <article className="amim-difference-card certificate">
              <div className="amim-difference-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </div>

              <h3>{t("amim.what.certificate.title")}</h3>

              <p>{t("amim.what.certificate.description")}</p>
            </article>
          </div>

          <div className="amim-important">
            <i className="bi bi-info-circle"></i>

            <div>
              <h3>{t("amim.what.important.title")}</h3>
              <p>{t("amim.what.important.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 60% */}
      <section className="amim-sixty">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">{t("amim.sixty.label")}</span>

            <h2>{t("amim.sixty.title")}</h2>

            <p>{t("amim.sixty.description")}</p>
          </div>

          <div className="amim-sixty-box">
            <div className="amim-percentage">60%</div>

            <div className="amim-sixty-content">
              <p>{t("amim.sixty.paragraph1")}</p>

              <strong>{t("amim.sixty.strong")}</strong>

              <p>{t("amim.sixty.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="amim-request">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">
              {t("amim.request.label")}
            </span>

            <h2>{t("amim.request.title")}</h2>

            <p>{t("amim.request.description")}</p>
          </div>

          <div className="amim-steps">
            {t("amim.request.steps", {
              returnObjects: true,
            }).map((step, index) => (
              <article className="amim-step" key={step.title}>
                <span>{index + 1}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="amim-process-note">
            <i className="bi bi-exclamation-circle"></i>
            <p>{t("amim.request.note")}</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="amim-documents">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">
              {t("amim.documents.label")}
            </span>

            <h2>{t("amim.documents.title")}</h2>

            <p>{t("amim.documents.description")}</p>
          </div>

          <ul className="amim-check-list">
            {t("amim.documents.items", {
              returnObjects: true,
            }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="amim-documents-note">{t("amim.documents.note")}</p>
        </div>
      </section>

      {/* CRIANÇAS AUTISTAS */}
      <section className="amim-autism">
        <div className="container amim-container">
          <div className="amim-autism-box">
            <div className="amim-autism-icon">
              <i className="bi bi-person-heart"></i>
            </div>

            <div>
              <span className="amim-section-label">
                {t("amim.autism.label")}
              </span>

              <h2>{t("amim.autism.title")}</h2>

              <p>{t("amim.autism.paragraph1")}</p>

              <p>{t("amim.autism.paragraph2")}</p>

              <div className="amim-autism-highlight">
                <strong>{t("amim.autism.highlight")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUE SERVE */}
      <section className="amim-benefits">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">
              {t("amim.benefits.label")}
            </span>

            <h2>{t("amim.benefits.title")}</h2>

            <p>{t("amim.benefits.description")}</p>
          </div>

          <div className="amim-benefits-grid">
            <article className="amim-benefit-card">
              <i className="bi bi-cash-coin"></i>
              <h3>{t("amim.benefits.psi.title")}</h3>
              <p>{t("amim.benefits.psi.description")}</p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-receipt"></i>
              <h3>{t("amim.benefits.tax.title")}</h3>
              <p>{t("amim.benefits.tax.description")}</p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-person-check"></i>
              <h3>{t("amim.benefits.priority.title")}</h3>
              <p>{t("amim.benefits.priority.description")}</p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-universal-access"></i>
              <h3>{t("amim.benefits.other.title")}</h3>
              <p>{t("amim.benefits.other.description")}</p>
            </article>
          </div>

          <div className="amim-benefits-warning">
            <i className="bi bi-lightbulb"></i>

            <p>
              <strong>{t("amim.benefits.warningStrong")}</strong>{" "}
              {t("amim.benefits.warningText")}
            </p>
          </div>
        </div>
      </section>

      {/* BALCÃO DA INCLUSÃO */}
      <section className="amim-inclusion-desk">
        <div className="container amim-container">
          <div className="amim-desk-image">
            <img
              src="/images/desk.png"
              alt={t("amim.inclusionDesk.imageAlt")}
            />
          </div>

          <div className="amim-desk-content">
            <span className="amim-section-label">
              {t("amim.inclusionDesk.label")}
            </span>

            <h2>{t("amim.inclusionDesk.title")}</h2>

            <p>{t("amim.inclusionDesk.paragraph1")}</p>

            <p>{t("amim.inclusionDesk.paragraph2")}</p>

            <a
              href="https://www.gov.pt/servicos/balcao-da-inclusao"
              target="_blank"
              rel="noreferrer"
              className="amim-desk-button"
            >
              {t("amim.inclusionDesk.button")}
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="amim-experience">
        <div className="container amim-container">
          <div className="amim-experience-box">
            <span className="amim-section-label">
              {t("amim.experience.label")}
            </span>

            <h2>{t("amim.experience.title")}</h2>

            <p>{t("amim.experience.paragraph1")}</p>
            <p>{t("amim.experience.paragraph2")}</p>
            <p>{t("amim.experience.paragraph3")}</p>
            <p>{t("amim.experience.paragraph4")}</p>
            <p>{t("amim.experience.paragraph5")}</p>

            <div className="amim-experience-note">
              <i className="bi bi-info-circle"></i>

              <p>{t("amim.experience.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="amim-sources">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">
              {t("amim.sources.label")}
            </span>

            <h2>{t("amim.sources.title")}</h2>
          </div>

          <article className="amim-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>{t("amim.sources.inclusionDesk.title")}</h3>

              <p>{t("amim.sources.inclusionDesk.description")}</p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
              >
                {t("amim.sources.button")}
              </a>
            </div>
          </article>

          <article className="amim-source-card">
            <i className="bi bi-person-check"></i>

            <div>
              <h3>{t("amim.sources.priority.title")}</h3>

              <p>{t("amim.sources.priority.description")}</p>

              <a
                href="https://www.gov.pt/servicos/atendimento-prioritario"
                target="_blank"
                rel="noreferrer"
              >
                {t("amim.sources.button")}
              </a>
            </div>
          </article>

          <article className="amim-source-card">
            <i className="bi bi-wallet2"></i>

            <div>
              <h3>{t("amim.sources.psi.title")}</h3>

              <p>{t("amim.sources.psi.description")}</p>

              <a
                href="https://www.gov.pt/servicos/requerer-a-prestacao-social-para-a-inclusao"
                target="_blank"
                rel="noreferrer"
              >
                {t("amim.sources.button")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AMIM;
