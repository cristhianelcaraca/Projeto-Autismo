import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AutismCharacteristicsQuiz from "../Components/AutismCharacteristicsQuiz";
import "./Suspicion.css";

function Suspicion() {
  const { t } = useTranslation();

  return (
    <main className="suspicion-page">
      {/* HERO */}
      <section className="suspicion-hero">
        <div className="container">
          <div className="suspicion-hero-content">
            <div className="suspicion-hero-image">
              <img
                src="/images/suspicion.png"
                alt={t("suspicion.hero.imageAlt")}
              />
            </div>

            <div className="suspicion-hero-text">
              <span className="suspicion-label">
                {t("suspicion.hero.label")}
              </span>

              <h1>{t("suspicion.hero.title")}</h1>

              <p>{t("suspicion.hero.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="suspicion-signs">
        <div className="container suspicion-container">
          <h2>{t("suspicion.signs.title")}</h2>

          <p className="section-intro">{t("suspicion.signs.description")}</p>

          <div className="signs-grid">
            <div className="sign-card">
              <div className="sign-icon purple">
                <i className="bi bi-balloon-heart"></i>
              </div>

              <h3>{t("suspicion.signs.earlyYears.title")}</h3>

              <p>{t("suspicion.signs.earlyYears.description")}</p>
            </div>

            <div className="sign-card">
              <div className="sign-icon yellow">
                <i className="bi bi-backpack"></i>
              </div>

              <h3>{t("suspicion.signs.schoolAge.title")}</h3>

              <p>{t("suspicion.signs.schoolAge.description")}</p>
            </div>

            <div className="sign-card">
              <div className="sign-icon blue">
                <i className="bi bi-person"></i>
              </div>

              <h3>{t("suspicion.signs.adolescentsAdults.title")}</h3>

              <p>{t("suspicion.signs.adolescentsAdults.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO PROCURAR AVALIAÇÃO */}
      <section className="when-assessment">
        <div className="container suspicion-container">
          <div className="assessment-box">
            <div className="assessment-icon">
              <i className="bi bi-search-heart"></i>
            </div>

            <div className="assessment-content">
              <h2>{t("suspicion.assessment.title")}</h2>

              <p>{t("suspicion.assessment.paragraph1")}</p>

              <p>{t("suspicion.assessment.paragraph2")}</p>

              <Link to="/diagnostico" className="assessment-button">
                {t("suspicion.assessment.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONÁRIO INFORMATIVO */}
      <section className="screening-section">
        <div className="container suspicion-container">
          <div className="screening-card">
            <div className="screening-image">
              <img src="/images/teste.png" alt={t("suspicion.quiz.imageAlt")} />
            </div>

            <div className="screening-content">
              <span>{t("suspicion.quiz.label")}</span>

              <h2>{t("suspicion.quiz.title")}</h2>

              <p>{t("suspicion.quiz.description")}</p>

              <p className="screening-disclaimer">
                {t("suspicion.quiz.disclaimer")}
              </p>

              <AutismCharacteristicsQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* M-CHAT */}
      <section className="mchat-info-section">
        <div className="container suspicion-container">
          <div className="mchat-info-card">
            <div className="mchat-info-icon">
              <i className="bi bi-patch-check"></i>
            </div>

            <div>
              <span>{t("suspicion.mchat.label")}</span>

              <h2>M-CHAT-R/F</h2>

              <p>{t("suspicion.mchat.paragraph1")}</p>

              <p>{t("suspicion.mchat.paragraph2")}</p>

              <a
                href="https://www.mchatscreen.com/mchat-rf/"
                target="_blank"
                rel="noopener noreferrer"
                className="mchat-official-button"
              >
                {t("suspicion.mchat.button")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="suspicion-experience">
        <div className="container">
          <div className="suspicion-experience-row">
            <div className="suspicion-experience-image">
              <img
                src="/images/family.png"
                alt={t("suspicion.experience.imageAlt")}
              />
            </div>

            <div className="suspicion-experience-content">
              <span>{t("suspicion.experience.label")}</span>

              <h2>{t("suspicion.experience.title")}</h2>

              <p>{t("suspicion.experience.paragraph1")}</p>

              <p>{t("suspicion.experience.paragraph2")}</p>

              <p>{t("suspicion.experience.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="suspicion-sources">
        <div className="container suspicion-container">
          <h2>{t("suspicion.sources.title")}</h2>

          <div className="source-card">
            <div className="source-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <h3>{t("suspicion.sources.dgs.title")}</h3>

              <p>{t("suspicion.sources.dgs.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Suspicion;
