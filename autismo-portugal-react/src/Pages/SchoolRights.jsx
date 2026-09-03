import { useTranslation } from "react-i18next";
import "./SchoolRights.css";

function SchoolRights() {
  const { t } = useTranslation();

  return (
    <main className="school-rights-page">
      {/* HERO */}
      <section className="school-rights-hero">
        <div className="container school-rights-container">
          <div className="school-rights-hero-content">
            <span className="school-rights-label">
              {t("schoolRights.hero.label")}
            </span>

            <h1>{t("schoolRights.hero.title")}</h1>

            <p>{t("schoolRights.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO INCLUSIVA */}
      <section className="inclusive-education">
        <div className="container school-rights-container">
          <div className="school-wrap-section">
            <div className="school-wrap-image inclusion-image">
              <img
                src="/images/inclusion.png"
                alt={t("schoolRights.inclusiveEducation.imageAlt")}
              />
            </div>

            <span className="school-section-label">
              {t("schoolRights.inclusiveEducation.label")}
            </span>

            <h2>{t("schoolRights.inclusiveEducation.title")}</h2>

            <div className="law-highlight">
              <i className="bi bi-book"></i>

              <p>{t("schoolRights.inclusiveEducation.law")}</p>
            </div>

            <p>{t("schoolRights.inclusiveEducation.paragraph1")}</p>

            <p>{t("schoolRights.inclusiveEducation.paragraph2")}</p>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="diagnosis-school-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.diagnosis.label")}
            </span>

            <h2>{t("schoolRights.diagnosis.title")}</h2>

            <p>{t("schoolRights.diagnosis.description")}</p>
          </div>

          <div className="diagnosis-support-box">
            <div className="diagnosis-support-icon">
              <i className="bi bi-lightbulb"></i>
            </div>

            <div>
              <h3>{t("schoolRights.diagnosis.focus.title")}</h3>

              <p>{t("schoolRights.diagnosis.focus.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLOS PRÁTICOS */}
      <section className="practical-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.practical.label")}
            </span>

            <h2>{t("schoolRights.practical.title")}</h2>

            <p>{t("schoolRights.practical.description")}</p>
          </div>

          <ul className="practical-check-list">
            {t("schoolRights.practical.items", {
              returnObjects: true,
            }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAPEL DOS PAIS */}
      <section className="parents-role">
        <div className="container school-rights-container">
          <div className="parents-role-box">
            <div className="parents-role-image">
              <img
                src="/images/parents.png"
                alt={t("schoolRights.parents.imageAlt")}
              />
            </div>

            <div className="parents-role-content">
              <span className="school-section-label">
                {t("schoolRights.parents.label")}
              </span>

              <h2>{t("schoolRights.parents.title")}</h2>

              <p>{t("schoolRights.parents.description")}</p>

              <ul className="parents-rights-list">
                {t("schoolRights.parents.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMAEI */}
      <section className="emaei-section">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.emaei.label")}
            </span>

            <h2>{t("schoolRights.emaei.title")}</h2>

            <p>{t("schoolRights.emaei.description")}</p>
          </div>

          <div className="emaei-box">
            <div className="emaei-icon">
              <i className="bi bi-diagram-3"></i>
            </div>

            <div>
              <h3>{t("schoolRights.emaei.boxTitle")}</h3>

              <p>{t("schoolRights.emaei.boxDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR APOIO */}
      <section className="request-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.request.label")}
            </span>

            <h2>{t("schoolRights.request.title")}</h2>
          </div>

          <div className="request-support-steps">
            {t("schoolRights.request.steps", {
              returnObjects: true,
            }).map((step, index) => (
              <div className="request-step" key={step.title}>
                <span>{index + 1}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTISMO É MAIS DO QUE APRENDIZAGEM */}
      <section className="school-barriers">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.barriers.label")}
            </span>

            <h2>{t("schoolRights.barriers.title")}</h2>

            <p>{t("schoolRights.barriers.description")}</p>
          </div>

          <div className="school-barriers-grid">
            <div className="school-barrier-item">
              <i className="bi bi-volume-up"></i>
              <span>{t("schoolRights.barriers.items.sensory")}</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-people"></i>
              <span>{t("schoolRights.barriers.items.social")}</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-heart-pulse"></i>
              <span>{t("schoolRights.barriers.items.emotional")}</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-chat-dots"></i>
              <span>{t("schoolRights.barriers.items.communication")}</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-calendar-week"></i>
              <span>{t("schoolRights.barriers.items.organisation")}</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-person-arms-up"></i>
              <span>{t("schoolRights.barriers.items.independence")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="school-experience">
        <div className="container school-rights-container">
          <div className="school-experience-box">
            <div className="school-experience-image">
              <img
                src="/images/Davi.png"
                alt={t("schoolRights.experience.imageAlt")}
              />
            </div>

            <div className="school-experience-content">
              <span className="school-section-label">
                {t("schoolRights.experience.label")}
              </span>

              <h2>{t("schoolRights.experience.title")}</h2>

              <p>{t("schoolRights.experience.paragraph1")}</p>

              <p>{t("schoolRights.experience.paragraph2")}</p>

              <p>{t("schoolRights.experience.paragraph3")}</p>

              <p>{t("schoolRights.experience.paragraph4")}</p>

              <p>{t("schoolRights.experience.paragraph5")}</p>

              <div className="experience-disclaimer">
                {t("schoolRights.experience.disclaimer")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="school-sources">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              {t("schoolRights.sources.label")}
            </span>

            <h2>{t("schoolRights.sources.title")}</h2>
          </div>

          <div className="school-source-card">
            <i className="bi bi-shield-check"></i>

            <div>
              <h3>Decreto-Lei n.º 54/2018, de 6 de julho</h3>

              <p>{t("schoolRights.sources.law.description")}</p>

              <a
                href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/54-2018-115652961"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("schoolRights.sources.law.button")}
              </a>
            </div>
          </div>

          <div className="school-source-card">
            <i className="bi bi-journal-text"></i>

            <div>
              <h3>{t("schoolRights.sources.santander.title")}</h3>

              <p>{t("schoolRights.sources.santander.description")}</p>

              <a
                href="https://www.santander.pt/salto/direitos-pais-com-filhos-autismo-portugal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("schoolRights.sources.santander.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SchoolRights;
