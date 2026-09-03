import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PSI.css";

function PSI() {
  const { t } = useTranslation();

  return (
    <main className="psi-page">
      {/* HERO */}
      <section className="psi-hero">
        <div className="container psi-container">
          <div className="psi-hero-content">
            <div className="psi-hero-text">
              <span className="psi-label">{t("psi.hero.label")}</span>

              <h1>{t("psi.hero.title")}</h1>

              <p>{t("psi.hero.description")}</p>
            </div>

            <div className="psi-hero-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM PODE TER DIREITO */}
      <section className="psi-eligibility">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">
              {t("psi.eligibility.label")}
            </span>

            <h2>{t("psi.eligibility.title")}</h2>

            <p>{t("psi.eligibility.description")}</p>
          </div>

          <div className="psi-eligibility-grid">
            <article className="psi-eligibility-card">
              <div className="psi-card-icon green">
                <i className="bi bi-file-earmark-medical"></i>
              </div>

              <h3>{t("psi.eligibility.disability.title")}</h3>
              <p>{t("psi.eligibility.disability.description")}</p>
            </article>

            <article className="psi-eligibility-card">
              <div className="psi-card-icon blue">
                <i className="bi bi-house-heart"></i>
              </div>

              <h3>{t("psi.eligibility.residence.title")}</h3>
              <p>{t("psi.eligibility.residence.description")}</p>
            </article>

            <article className="psi-eligibility-card">
              <div className="psi-card-icon purple">
                <i className="bi bi-clipboard-check"></i>
              </div>

              <h3>{t("psi.eligibility.conditions.title")}</h3>
              <p>{t("psi.eligibility.conditions.description")}</p>
            </article>
          </div>

          <div className="psi-important-note">
            <i className="bi bi-info-circle"></i>
            <p>{t("psi.eligibility.note")}</p>
          </div>
        </div>
      </section>

      {/* DUAS PARTES */}
      <section className="psi-components">
        <div className="container psi-container">
          <div className="psi-components-image">
            <img src="/images/benefit.png" alt={t("psi.components.imageAlt")} />
          </div>

          <div className="psi-section-heading left">
            <span className="psi-section-label">
              {t("psi.components.label")}
            </span>

            <h2>{t("psi.components.title")}</h2>

            <p>{t("psi.components.description")}</p>
          </div>

          <div className="psi-components-grid">
            <article className="psi-component-card base">
              <div className="psi-component-number">
                <i className="bi bi-wallet2"></i>
              </div>

              <h3>{t("psi.components.base.title")}</h3>

              <p>{t("psi.components.base.description")}</p>

              <div className="psi-value-box">
                <span>{t("psi.components.valueLabel")}</span>
                <strong>333,64 €</strong>
              </div>

              <p className="psi-small-note">{t("psi.components.base.note")}</p>
            </article>

            <article className="psi-component-card complement">
              <div className="psi-component-number">
                <i className="bi bi-piggy-bank"></i>
              </div>

              <h3>{t("psi.components.complement.title")}</h3>

              <p>{t("psi.components.complement.description")}</p>

              <div className="psi-value-box">
                <span>{t("psi.components.valueLabel")}</span>
                <strong>670 €</strong>
              </div>

              <p className="psi-small-note">
                {t("psi.components.complement.note")}
              </p>
            </article>
          </div>

          <div className="psi-values-warning">
            <i className="bi bi-exclamation-circle"></i>

            <div>
              <h3>{t("psi.components.warning.title")}</h3>
              <p>{t("psi.components.warning.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CRIANÇAS */}
      <section className="psi-children">
        <div className="container psi-container">
          <div className="psi-children-box">
            <div className="psi-children-icon">
              <i className="bi bi-people"></i>
            </div>

            <div>
              <span className="psi-section-label">
                {t("psi.children.label")}
              </span>

              <h2>{t("psi.children.title")}</h2>

              <p>{t("psi.children.paragraph1")}</p>
              <p>{t("psi.children.paragraph2")}</p>

              <div className="psi-children-highlight">
                <strong>{t("psi.children.highlight")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMIM */}
      <section className="psi-amim">
        <div className="container psi-container">
          <div className="psi-amim-box">
            <div className="psi-amim-icon">
              <i className="bi bi-file-earmark-medical"></i>
            </div>

            <div className="psi-amim-content">
              <span className="psi-section-label">{t("psi.amim.label")}</span>

              <h2>{t("psi.amim.title")}</h2>

              <p>{t("psi.amim.description")}</p>

              <Link to="/amim" className="psi-button">
                {t("psi.amim.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="psi-request">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">{t("psi.request.label")}</span>

            <h2>{t("psi.request.title")}</h2>

            <p>{t("psi.request.description")}</p>
          </div>

          <div className="psi-steps">
            {t("psi.request.steps", { returnObjects: true }).map(
              (step, index) => (
                <article className="psi-step" key={step.title}>
                  <span>{index + 1}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* RENDIMENTOS */}
      <section className="psi-income">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">{t("psi.income.label")}</span>

            <h2>{t("psi.income.title")}</h2>

            <p>{t("psi.income.description")}</p>
          </div>

          <div className="psi-income-grid">
            <article className="psi-income-card">
              <div className="psi-card-icon green">
                <i className="bi bi-wallet"></i>
              </div>

              <h3>{t("psi.income.base.title")}</h3>
              <p>{t("psi.income.base.description")}</p>
            </article>

            <article className="psi-income-card">
              <div className="psi-card-icon yellow">
                <i className="bi bi-house"></i>
              </div>

              <h3>{t("psi.income.complement.title")}</h3>
              <p>{t("psi.income.complement.description")}</p>
            </article>
          </div>

          <div className="psi-income-note">
            <i className="bi bi-calculator"></i>
            <p>{t("psi.income.note")}</p>
          </div>
        </div>
      </section>

      {/* TRABALHAR E RECEBER */}
      <section className="psi-work">
        <div className="container psi-container">
          <div className="psi-work-box">
            <div className="psi-work-icon">
              <i className="bi bi-briefcase"></i>
            </div>

            <div>
              <span className="psi-section-label">{t("psi.work.label")}</span>

              <h2>{t("psi.work.title")}</h2>

              <p>{t("psi.work.paragraph1")}</p>
              <p>{t("psi.work.paragraph2")}</p>

              <div className="psi-work-highlight">
                <strong>{t("psi.work.highlightStrong")}</strong>
                <p>{t("psi.work.highlight")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É O MESMO QUE */}
      <section className="psi-differences">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">
              {t("psi.differences.label")}
            </span>

            <h2>{t("psi.differences.title")}</h2>
          </div>

          <div className="psi-differences-grid">
            <article className="psi-difference-card">
              <i className="bi bi-file-earmark-medical"></i>

              <h3>AMIM</h3>
              <p>{t("psi.differences.amim")}</p>
            </article>

            <article className="psi-difference-card">
              <i className="bi bi-mortarboard"></i>

              <h3>{t("psi.differences.education.title")}</h3>
              <p>{t("psi.differences.education.description")}</p>
            </article>

            <article className="psi-difference-card">
              <i className="bi bi-person-plus"></i>

              <h3>{t("psi.differences.allowance.title")}</h3>
              <p>{t("psi.differences.allowance.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ONDE PEDIR AJUDA */}
      <section className="psi-help">
        <div className="container psi-container">
          <div className="psi-help-box">
            <div className="psi-help-icon">
              <i className="bi bi-info-square"></i>
            </div>

            <div className="psi-help-content">
              <span className="psi-section-label">{t("psi.help.label")}</span>

              <h2>Balcão da Inclusão</h2>

              <p>{t("psi.help.description")}</p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
                className="psi-button"
              >
                {t("psi.help.button")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA ATUALIZAÇÃO */}
      <section className="psi-update">
        <div className="container psi-container">
          <div className="psi-update-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <h2>{t("psi.update.title")}</h2>
              <p>{t("psi.update.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="psi-sources">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">{t("psi.sources.label")}</span>

            <h2>{t("psi.sources.title")}</h2>
          </div>

          <article className="psi-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>gov.pt — Prestação Social para a Inclusão</h3>

              <p>{t("psi.sources.psi.description")}</p>

              <a
                href="https://www.gov.pt/servicos/requerer-a-prestacao-social-para-a-inclusao"
                target="_blank"
                rel="noreferrer"
              >
                {t("psi.sources.button")}
              </a>
            </div>
          </article>

          <article className="psi-source-card">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>gov.pt — Balcão da Inclusão</h3>

              <p>{t("psi.sources.inclusion.description")}</p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
              >
                {t("psi.sources.button")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PSI;
