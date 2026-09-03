import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AfterDiagnosis.css";

function AfterDiagnosis() {
  const { t } = useTranslation();

  return (
    <main className="after-diagnosis-page">
      {/* HERO */}
      <section className="after-diagnosis-hero">
        <div className="container">
          <div className="after-diagnosis-hero-content">
            <div className="after-diagnosis-hero-text">
              <span className="after-diagnosis-label">
                {t("afterDiagnosis.hero.label")}
              </span>

              <h1>{t("afterDiagnosis.hero.title")}</h1>

              <p>{t("afterDiagnosis.hero.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PONTO DE PARTIDA */}
      <section className="after-starting">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image starting-image">
              <img
                src="/images/starting.png"
                alt={t("afterDiagnosis.starting.imageAlt")}
              />
            </div>

            <span className="after-section-label">
              {t("afterDiagnosis.starting.label")}
            </span>

            <h2>{t("afterDiagnosis.starting.title")}</h2>

            <p>{t("afterDiagnosis.starting.paragraph1")}</p>
            <p>{t("afterDiagnosis.starting.paragraph2")}</p>
            <p>{t("afterDiagnosis.starting.paragraph3")}</p>
            <p>{t("afterDiagnosis.starting.listIntro")}</p>

            <ul className="after-list">
              {t("afterDiagnosis.starting.areas", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APOIOS */}
      <section className="after-supports">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">
              {t("afterDiagnosis.supports.label")}
            </span>

            <h2>{t("afterDiagnosis.supports.title")}</h2>

            <p>{t("afterDiagnosis.supports.description")}</p>
          </div>

          <div className="after-support-grid">
            <div className="after-support-card">
              <div className="after-support-icon purple">
                <i className="bi bi-heart"></i>
              </div>

              <h3>{t("afterDiagnosis.supports.psychology.title")}</h3>
              <p>{t("afterDiagnosis.supports.psychology.description")}</p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon blue">
                <i className="bi bi-chat-dots"></i>
              </div>

              <h3>{t("afterDiagnosis.supports.speech.title")}</h3>
              <p>{t("afterDiagnosis.supports.speech.description")}</p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon green">
                <i className="bi bi-person-arms-up"></i>
              </div>

              <h3>{t("afterDiagnosis.supports.occupational.title")}</h3>
              <p>{t("afterDiagnosis.supports.occupational.description")}</p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon yellow">
                <i className="bi bi-universal-access"></i>
              </div>

              <h3>{t("afterDiagnosis.supports.physiotherapy.title")}</h3>
              <p>{t("afterDiagnosis.supports.physiotherapy.description")}</p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon pink">
                <i className="bi bi-hospital"></i>
              </div>

              <h3>{t("afterDiagnosis.supports.medical.title")}</h3>
              <p>{t("afterDiagnosis.supports.medical.description")}</p>
            </div>
          </div>

          <div className="therapy-note">
            <div className="therapy-note-icon">
              <i className="bi bi-lightbulb"></i>
            </div>

            <div>
              <h3>{t("afterDiagnosis.supports.bestTherapy.title")}</h3>
              <p>{t("afterDiagnosis.supports.bestTherapy.paragraph1")}</p>
              <p>{t("afterDiagnosis.supports.bestTherapy.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLA */}
      <section className="after-school">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image teacher-image">
              <img
                src="/images/teacher.png"
                alt={t("afterDiagnosis.school.imageAlt")}
              />
            </div>

            <span className="after-section-label">
              {t("afterDiagnosis.school.label")}
            </span>

            <h2>{t("afterDiagnosis.school.title")}</h2>

            <p>{t("afterDiagnosis.school.paragraph1")}</p>
            <p>{t("afterDiagnosis.school.paragraph2")}</p>

            <ul className="after-list">
              {t("afterDiagnosis.school.items", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link to="/direitos-escola" className="after-link-button">
              {t("afterDiagnosis.school.button")}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* DIVULGAR DIAGNÓSTICO */}
      <section className="after-disclosure">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image speaking-image">
              <img
                src="/images/speaking.png"
                alt={t("afterDiagnosis.disclosure.imageAlt")}
              />
            </div>

            <span className="after-section-label">
              {t("afterDiagnosis.disclosure.label")}
            </span>

            <h2>{t("afterDiagnosis.disclosure.title")}</h2>

            <p>{t("afterDiagnosis.disclosure.paragraph1")}</p>
            <p>{t("afterDiagnosis.disclosure.paragraph2")}</p>

            <div className="disclosure-questions">
              <h3>{t("afterDiagnosis.disclosure.questionsTitle")}</h3>

              <ul className="after-list">
                {t("afterDiagnosis.disclosure.questions", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>{t("afterDiagnosis.disclosure.paragraph3")}</p>
            <p>{t("afterDiagnosis.disclosure.paragraph4")}</p>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="after-adults">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">
              {t("afterDiagnosis.adults.label")}
            </span>

            <h2>{t("afterDiagnosis.adults.title")}</h2>

            <p>{t("afterDiagnosis.adults.intro")}</p>
          </div>

          <div className="adult-diagnosis-box">
            <p>{t("afterDiagnosis.adults.paragraph1")}</p>
            <p>{t("afterDiagnosis.adults.paragraph2")}</p>
          </div>
        </div>
      </section>

      {/* MASKING */}
      <section className="after-masking">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image masking-image">
              <img
                src="/images/masking.png"
                alt={t("afterDiagnosis.masking.imageAlt")}
              />
            </div>

            <span className="after-section-label">
              {t("afterDiagnosis.masking.label")}
            </span>

            <h2>{t("afterDiagnosis.masking.title")}</h2>

            <p>
              {t("afterDiagnosis.masking.paragraph1Before")}{" "}
              <strong>masking</strong>{" "}
              {t("afterDiagnosis.masking.paragraph1After")}
            </p>

            <p>{t("afterDiagnosis.masking.listIntro")}</p>

            <ul className="after-list masking-list">
              <li>
                <div className="masking-icon green">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.rehearse")}</span>
              </li>

              <li>
                <div className="masking-icon purple">
                  <i className="bi bi-people"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.imitate")}</span>
              </li>

              <li>
                <div className="masking-icon blue">
                  <i className="bi bi-eye"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.eyeContact")}</span>
              </li>

              <li>
                <div className="masking-icon yellow">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.movements")}</span>
              </li>

              <li>
                <div className="masking-icon pink">
                  <i className="bi bi-chat-left-text"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.control")}</span>
              </li>

              <li>
                <div className="masking-icon turquoise">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <span>{t("afterDiagnosis.masking.items.discomfort")}</span>
              </li>
            </ul>

            <p>{t("afterDiagnosis.masking.paragraph2")}</p>
            <p>{t("afterDiagnosis.masking.paragraph3")}</p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="after-checklist">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">
              {t("afterDiagnosis.checklist.label")}
            </span>

            <h2>{t("afterDiagnosis.checklist.title")}</h2>

            <p>{t("afterDiagnosis.checklist.description")}</p>
          </div>

          <div className="after-checklist-grid">
            {t("afterDiagnosis.checklist.steps", {
              returnObjects: true,
            }).map((step, index) => (
              <div className="after-check-item" key={step.title}>
                <span>{index + 1}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="after-final-message">
            <p>
              <strong>{t("afterDiagnosis.final.strong")}</strong>{" "}
              {t("afterDiagnosis.final.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AfterDiagnosis;
