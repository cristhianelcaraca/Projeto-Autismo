import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Evaluation.css";

function Evaluation() {
  const { t } = useTranslation();

  return (
    <main className="evaluation-page">
      {/* HERO */}
      <section className="evaluation-hero">
        <div className="container">
          <div className="evaluation-hero-content">
            <div className="evaluation-hero-image">
              <img
                src="/images/evaluation.png"
                alt={t("evaluation.hero.imageAlt")}
              />
            </div>

            <div className="evaluation-hero-text">
              <span className="evaluation-label">
                {t("evaluation.hero.label")}
              </span>

              <h1>{t("evaluation.hero.title")}</h1>

              <p>{t("evaluation.hero.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO COMEÇAR */}
      <section className="evaluation-start">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>{t("evaluation.start.title")}</h2>

            <p>{t("evaluation.start.description")}</p>
          </div>

          <div className="evaluation-paths">
            {/* SNS */}
            <div className="evaluation-path-card">
              <div className="evaluation-path-icon blue">
                <i className="bi bi-hospital"></i>
              </div>

              <h3>{t("evaluation.start.sns.title")}</h3>

              <p>{t("evaluation.start.sns.paragraph1")}</p>

              <p>{t("evaluation.start.sns.paragraph2")}</p>
            </div>

            {/* PRIVADO */}
            <div className="evaluation-path-card">
              <div className="evaluation-path-icon green">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>{t("evaluation.start.private.title")}</h3>

              <p>{t("evaluation.start.private.paragraph1")}</p>

              <p>{t("evaluation.start.private.paragraph2")}</p>
            </div>
          </div>

          <div className="evaluation-note">
            <div className="evaluation-note-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div>
              <h3>{t("evaluation.start.note.title")}</h3>

              <p>{t("evaluation.start.note.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ACONTECE DURANTE A AVALIAÇÃO */}
      <section className="evaluation-process">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>{t("evaluation.process.title")}</h2>

            <p>{t("evaluation.process.description")}</p>
          </div>

          <div className="evaluation-steps">
            <div className="evaluation-step">
              <span>1</span>

              <div>
                <h3>{t("evaluation.process.step1.title")}</h3>

                <p>{t("evaluation.process.step1.description")}</p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>2</span>

              <div>
                <h3>{t("evaluation.process.step2.title")}</h3>

                <p>{t("evaluation.process.step2.description")}</p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>3</span>

              <div>
                <h3>{t("evaluation.process.step3.title")}</h3>

                <p>{t("evaluation.process.step3.description")}</p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>4</span>

              <div>
                <h3>{t("evaluation.process.step4.title")}</h3>

                <p>{t("evaluation.process.step4.description")}</p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>5</span>

              <div>
                <h3>{t("evaluation.process.step5.title")}</h3>

                <p>{t("evaluation.process.step5.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLA */}
      <section className="evaluation-school">
        <div className="container evaluation-container">
          <div className="evaluation-school-box">
            <div className="evaluation-school-icon">
              <img
                src="/images/school.png"
                alt={t("evaluation.school.imageAlt")}
              />
            </div>

            <div className="evaluation-school-content">
              <span>{t("evaluation.school.label")}</span>

              <h2>{t("evaluation.school.title")}</h2>

              <p>{t("evaluation.school.paragraph1")}</p>

              <p>{t("evaluation.school.paragraph2")}</p>

              <p>{t("evaluation.school.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIS DA AVALIAÇÃO */}
      <section className="evaluation-after">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>{t("evaluation.after.title")}</h2>

            <p>{t("evaluation.after.description")}</p>
          </div>

          <div className="evaluation-after-grid">
            <div className="evaluation-after-card">
              <div className="evaluation-after-icon purple">
                <i className="bi bi-chat-square-text"></i>
              </div>

              <h3>{t("evaluation.after.results.title")}</h3>

              <p>{t("evaluation.after.results.description")}</p>
            </div>

            <div className="evaluation-after-card">
              <div className="evaluation-after-icon blue">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <h3>{t("evaluation.after.report.title")}</h3>

              <p>{t("evaluation.after.report.description")}</p>
            </div>

            <div className="evaluation-after-card">
              <div className="evaluation-after-icon green">
                <i className="bi bi-signpost-split"></i>
              </div>

              <h3>{t("evaluation.after.nextSteps.title")}</h3>

              <p>{t("evaluation.after.nextSteps.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="evaluation-experience">
        <div className="container evaluation-container">
          <div className="evaluation-experience-box">
            <div className="evaluation-experience-image">
              <img
                src="/images/family.png"
                alt={t("evaluation.experience.imageAlt")}
              />
            </div>

            <div className="evaluation-experience-content">
              <span>{t("evaluation.experience.label")}</span>

              <h2>{t("evaluation.experience.title")}</h2>

              <p>{t("evaluation.experience.paragraph1")}</p>

              <p>{t("evaluation.experience.paragraph2")}</p>

              <p>{t("evaluation.experience.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="evaluation-next">
        <div className="container evaluation-container">
          <span className="evaluation-next-label">
            {t("evaluation.next.label")}
          </span>

          <h2>{t("evaluation.next.title")}</h2>

          <p>{t("evaluation.next.description")}</p>

          <Link to="/diagnostico" className="evaluation-link">
            {t("evaluation.next.button")}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Evaluation;
