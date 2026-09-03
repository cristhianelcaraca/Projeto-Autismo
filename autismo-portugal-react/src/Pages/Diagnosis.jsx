import { useTranslation } from "react-i18next";
import "./Diagnosis.css";

function Diagnosis() {
  const { t } = useTranslation();

  return (
    <main className="diagnosis-page">
      {/* HERO */}
      <section className="diagnosis-hero">
        <div className="container">
          <div className="diagnosis-hero-content">
            <div className="diagnosis-hero-image">
              <img src="/images/brain.png" alt={t("diagnosis.hero.imageAlt")} />
            </div>

            <div className="diagnosis-hero-text">
              <span className="diagnosis-label">
                {t("diagnosis.hero.label")}
              </span>

              <h1>{t("diagnosis.hero.title")}</h1>

              <p>{t("diagnosis.hero.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="diagnosis-intro">
        <div className="container diagnosis-container">
          <h2>{t("diagnosis.intro.title")}</h2>

          <p>{t("diagnosis.intro.paragraph1")}</p>

          <p>{t("diagnosis.intro.paragraph2")}</p>

          <div className="evaluation-cards">
            <div className="evaluation-card">
              <div className="diagnosis-icon purple">
                <i className="bi bi-chat-left-text"></i>
              </div>

              <h3>{t("diagnosis.intro.interview.title")}</h3>

              <p>{t("diagnosis.intro.interview.description")}</p>
            </div>

            <div className="evaluation-card">
              <div className="diagnosis-icon green">
                <i className="bi bi-clipboard2-check"></i>
              </div>

              <h3>{t("diagnosis.intro.assessment.title")}</h3>

              <p>{t("diagnosis.intro.assessment.description")}</p>
            </div>

            <div className="evaluation-card">
              <div className="diagnosis-icon yellow">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("diagnosis.intro.team.title")}</h3>

              <p>{t("diagnosis.intro.team.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMINHOS */}
      <section className="diagnosis-paths">
        <div className="container diagnosis-container">
          <div className="section-heading">
            <h2>{t("diagnosis.paths.title")}</h2>

            <p>{t("diagnosis.paths.description")}</p>
          </div>

          <div className="row g-4">
            {/* SNS */}
            <div className="col-lg-6">
              <div className="path-card sns-card">
                <div className="path-header">
                  <div className="path-icon sns-icon">
                    <i className="bi bi-hospital"></i>
                  </div>

                  <div>
                    <span className="path-small-title">
                      {t("diagnosis.paths.sns.label")}
                    </span>

                    <h3>{t("diagnosis.paths.sns.title")}</h3>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>1</span>

                  <div>
                    <h4>{t("diagnosis.paths.sns.step1.title")}</h4>

                    <p>{t("diagnosis.paths.sns.step1.description")}</p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>2</span>

                  <div>
                    <h4>{t("diagnosis.paths.sns.step2.title")}</h4>

                    <p>{t("diagnosis.paths.sns.step2.description")}</p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>3</span>

                  <div>
                    <h4>{t("diagnosis.paths.sns.step3.title")}</h4>

                    <p>{t("diagnosis.paths.sns.step3.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PRIVADO */}
            <div className="col-lg-6">
              <div className="path-card private-card">
                <div className="path-header">
                  <div className="path-icon private-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>

                  <div>
                    <span className="path-small-title">
                      {t("diagnosis.paths.private.label")}
                    </span>

                    <h3>{t("diagnosis.paths.private.title")}</h3>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>1</span>

                  <div>
                    <h4>{t("diagnosis.paths.private.step1.title")}</h4>

                    <p>{t("diagnosis.paths.private.step1.description")}</p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>2</span>

                  <div>
                    <h4>{t("diagnosis.paths.private.step2.title")}</h4>

                    <p>{t("diagnosis.paths.private.step2.description")}</p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>3</span>

                  <div>
                    <h4>{t("diagnosis.paths.private.step3.title")}</h4>

                    <p>{t("diagnosis.paths.private.step3.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="adult-diagnosis">
        <div className="container diagnosis-container">
          <div className="adult-box">
            <div>
              <h2>{t("diagnosis.adults.title")}</h2>

              <p>{t("diagnosis.adults.paragraph1")}</p>

              <p>{t("diagnosis.adults.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="our-experience">
        <div className="experience-card">
          <div className="experience-title-row">
            <div className="experience-image">
              <img
                src="/images/family.png"
                alt={t("diagnosis.experience.imageAlt")}
              />
            </div>

            <div className="experience-headings">
              <h2 className="experience-title">
                {t("diagnosis.experience.title")}
              </h2>

              <h3 className="experience-subtitle">
                PIN – Partners in Neuroscience
              </h3>
            </div>
          </div>

          <div className="experience-content">
            <p>{t("diagnosis.experience.paragraph1")}</p>

            <p>{t("diagnosis.experience.paragraph2")}</p>

            <a
              href="https://pin.com.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-button"
            >
              {t("diagnosis.experience.button")}
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="diagnosis-sources">
        <div className="container diagnosis-container">
          <h2>{t("diagnosis.sources.title")}</h2>

          <div className="source-card">
            <div className="source-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <h3>{t("diagnosis.sources.dgs.title")}</h3>

              <p>{t("diagnosis.sources.dgs.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Diagnosis;
