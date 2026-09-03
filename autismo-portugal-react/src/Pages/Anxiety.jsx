import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Anxiety.css";

function Anxiety() {
  const { t } = useTranslation();

  return (
    <main className="daily-anxiety-page">
      {/* HERO */}
      <section className="daily-anxiety-hero">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-hero-content">
            <div className="daily-anxiety-hero-text">
              <span className="daily-anxiety-label">
                {t("anxiety.hero.label")}
              </span>

              <h1>{t("anxiety.hero.title")}</h1>

              <p>{t("anxiety.hero.paragraph1")}</p>
              <p>{t("anxiety.hero.paragraph2")}</p>
            </div>

            <div className="daily-anxiety-hero-symbol">
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É AUTISMO */}
      <section className="daily-anxiety-not-autism">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.notAutism.label")}
            </span>

            <h2>{t("anxiety.notAutism.title")}</h2>

            <p>{t("anxiety.notAutism.description")}</p>
          </div>

          <div className="daily-anxiety-important">
            <i className="bi bi-info-circle"></i>

            <div>
              <h3>{t("anxiety.notAutism.box.title")}</h3>
              <p>{t("anxiety.notAutism.box.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE É FREQUENTE */}
      <section className="daily-anxiety-causes">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-causes-image">
            <img src="/images/crises.png" alt={t("anxiety.causes.imageAlt")} />
          </div>

          <div className="daily-anxiety-section-heading daily-anxiety-heading-left">
            <span className="daily-anxiety-section-label">
              {t("anxiety.causes.label")}
            </span>

            <h2>{t("anxiety.causes.title")}</h2>

            <p>{t("anxiety.causes.description")}</p>
          </div>

          <div className="daily-anxiety-causes-grid">
            <article className="daily-anxiety-cause-card sensory">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-volume-up"></i>
              </div>

              <h3>{t("anxiety.causes.sensory.title")}</h3>
              <p>{t("anxiety.causes.sensory.description")}</p>
            </article>

            <article className="daily-anxiety-cause-card uncertainty">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-question-circle"></i>
              </div>

              <h3>{t("anxiety.causes.uncertainty.title")}</h3>
              <p>{t("anxiety.causes.uncertainty.description")}</p>
            </article>

            <article className="daily-anxiety-cause-card social">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("anxiety.causes.social.title")}</h3>
              <p>{t("anxiety.causes.social.description")}</p>
            </article>

            <article className="daily-anxiety-cause-card masking">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-mask"></i>
              </div>

              <h3>{t("anxiety.causes.masking.title")}</h3>
              <p>{t("anxiety.causes.masking.description")}</p>
            </article>

            <article className="daily-anxiety-cause-card emotions">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-heart"></i>
              </div>

              <h3>{t("anxiety.causes.emotions.title")}</h3>
              <p>{t("anxiety.causes.emotions.description")}</p>
            </article>

            <article className="daily-anxiety-cause-card experiences">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-shield-exclamation"></i>
              </div>

              <h3>{t("anxiety.causes.experiences.title")}</h3>
              <p>{t("anxiety.causes.experiences.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* NEM SEMPRE PARECE ANSIEDADE */}
      <section className="daily-anxiety-signs">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-signs-image">
            <img src="/images/cry.png" alt={t("anxiety.signs.imageAlt")} />
          </div>

          <div className="daily-anxiety-signs-content">
            <span className="daily-anxiety-section-label">
              {t("anxiety.signs.label")}
            </span>

            <h2>{t("anxiety.signs.title")}</h2>

            <p>{t("anxiety.signs.description")}</p>

            <div className="daily-anxiety-sign-list">
              {t("anxiety.signs.items", {
                returnObjects: true,
              }).map((item) => (
                <div key={item}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="daily-anxiety-behaviour-note">
            <i className="bi bi-chat-square-heart"></i>

            <div>
              <h3>{t("anxiety.signs.behaviour.title")}</h3>
              <p>{t("anxiety.signs.behaviour.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ANSIEDADE ANTECIPATÓRIA */}
      <section className="daily-anxiety-anticipatory">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.anticipatory.label")}
            </span>

            <h2>{t("anxiety.anticipatory.title")}</h2>

            <p>{t("anxiety.anticipatory.description")}</p>
          </div>

          <div className="daily-anxiety-thoughts">
            {t("anxiety.anticipatory.thoughts", {
              returnObjects: true,
            }).map((thought) => (
              <span key={thought}>{thought}</span>
            ))}
          </div>

          <div className="daily-anxiety-cycle">
            {t("anxiety.anticipatory.cycle", {
              returnObjects: true,
            }).map((item, index, array) => (
              <span key={item}>
                <article>
                  <span>{index + 1}</span>
                  <h3>{item}</h3>
                </article>

                {index < array.length - 1 && (
                  <i className="bi bi-arrow-right"></i>
                )}
              </span>
            ))}
          </div>

          <div className="daily-anxiety-cycle-note">
            <i className="bi bi-info-circle"></i>
            <p>{t("anxiety.anticipatory.note")}</p>
          </div>
        </div>
      </section>

      {/* NECESSIDADE DE CONTROLO */}
      <section className="daily-anxiety-control">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-control-box">
            <div className="daily-anxiety-control-icon">
              <i className="bi bi-calendar-check"></i>
            </div>

            <div>
              <span className="daily-anxiety-section-label">
                {t("anxiety.control.label")}
              </span>

              <h2>{t("anxiety.control.title")}</h2>

              <p>{t("anxiety.control.description")}</p>

              <ul>
                {t("anxiety.control.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="daily-anxiety-control-note">
                <strong>{t("anxiety.control.noteStrong")}</strong>
                <p>{t("anxiety.control.noteText")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO LIMITA A VIDA */}
      <section className="daily-anxiety-impact">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.impact.label")}
            </span>

            <h2>{t("anxiety.impact.title")}</h2>

            <p>{t("anxiety.impact.description")}</p>
          </div>

          <div className="daily-anxiety-impact-grid">
            <article>
              <div className="daily-anxiety-impact-icon school">
                <i className="bi bi-backpack"></i>
              </div>
              <h3>{t("anxiety.impact.school.title")}</h3>
              <p>{t("anxiety.impact.school.description")}</p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon social">
                <i className="bi bi-people"></i>
              </div>
              <h3>{t("anxiety.impact.social.title")}</h3>
              <p>{t("anxiety.impact.social.description")}</p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon independence">
                <i className="bi bi-signpost-split"></i>
              </div>
              <h3>{t("anxiety.impact.independence.title")}</h3>
              <p>{t("anxiety.impact.independence.description")}</p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon health">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h3>{t("anxiety.impact.wellbeing.title")}</h3>
              <p>{t("anxiety.impact.wellbeing.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE PODE AJUDAR */}
      <section className="daily-anxiety-help">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.help.label")}
            </span>

            <h2>{t("anxiety.help.title")}</h2>

            <p>{t("anxiety.help.description")}</p>
          </div>

          <div className="daily-anxiety-help-grid">
            {t("anxiety.help.items", {
              returnObjects: true,
            }).map((item) => (
              <div className="daily-anxiety-help-item" key={item}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="daily-anxiety-professional">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>{t("anxiety.help.professional.title")}</h3>
              <p>{t("anxiety.help.professional.paragraph1")}</p>
              <p>{t("anxiety.help.professional.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CRISES E SOBRECARGA */}
      <section className="daily-anxiety-overload">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-overload-box">
            <div className="daily-anxiety-overload-icon">
              <i className="bi bi-cloud-lightning-rain"></i>
            </div>

            <div>
              <span className="daily-anxiety-section-label">
                {t("anxiety.overload.label")}
              </span>

              <h2>{t("anxiety.overload.title")}</h2>

              <p>{t("anxiety.overload.description")}</p>

              <Link to="/crises-sobrecarga" className="daily-anxiety-button">
                {t("anxiety.overload.button")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INFÂNCIA */}
      <section className="daily-anxiety-childhood">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.childhood.label")}
            </span>

            <h2>{t("anxiety.childhood.title")}</h2>

            <p>{t("anxiety.childhood.description")}</p>
          </div>

          <div className="daily-anxiety-childhood-box">
            <i className="bi bi-lightbulb"></i>

            <div>
              <p>{t("anxiety.childhood.paragraph1")}</p>

              <p>
                {t("anxiety.childhood.paragraph2Before")}{" "}
                <strong>{t("anxiety.childhood.strong")}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="daily-anxiety-adults">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-adults-image">
            <img src="/images/adult.png" alt={t("anxiety.adults.imageAlt")} />
          </div>

          <div className="daily-anxiety-adults-content">
            <span className="daily-anxiety-section-label">
              {t("anxiety.adults.label")}
            </span>

            <h2>{t("anxiety.adults.title")}</h2>

            <p>{t("anxiety.adults.description")}</p>

            <div className="daily-anxiety-adults-list">
              {t("anxiety.adults.items", {
                returnObjects: true,
              }).map((item) => (
                <div key={item}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="daily-anxiety-adults-note">
            <i className="bi bi-bar-chart"></i>

            <p>{t("anxiety.adults.note")}</p>
          </div>
        </div>
      </section>

      {/* OBSERVAR PADRÕES */}
      <section className="daily-anxiety-observe">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.observe.label")}
            </span>

            <h2>{t("anxiety.observe.title")}</h2>
          </div>

          <div className="daily-anxiety-observe-grid">
            <article>
              <i className="bi bi-calendar-event"></i>
              <span>{t("anxiety.observe.change")}</span>
            </article>

            <article>
              <i className="bi bi-volume-up"></i>
              <span>{t("anxiety.observe.sensory")}</span>
            </article>

            <article>
              <i className="bi bi-moon-stars"></i>
              <span>{t("anxiety.observe.sleep")}</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>{t("anxiety.observe.social")}</span>
            </article>

            <article>
              <i className="bi bi-list-task"></i>
              <span>{t("anxiety.observe.tasks")}</span>
            </article>

            <article>
              <i className="bi bi-shield-exclamation"></i>
              <span>{t("anxiety.observe.previous")}</span>
            </article>
          </div>
        </div>
      </section>

      {/* AJUDA URGENTE */}
      <section className="daily-anxiety-urgent">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-urgent-box">
            <i className="bi bi-exclamation-triangle"></i>

            <div>
              <h2>{t("anxiety.urgent.title")}</h2>

              <p>{t("anxiety.urgent.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="daily-anxiety-sources">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              {t("anxiety.sources.label")}
            </span>

            <h2>{t("anxiety.sources.title")}</h2>
          </div>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-book"></i>

            <div>
              <h3>{t("anxiety.sources.nas.title")}</h3>
              <p>{t("anxiety.sources.nas.description")}</p>

              <a
                href="https://www.autism.org.uk/advice-and-guidance/mental-health/anxiety"
                target="_blank"
                rel="noreferrer"
              >
                {t("anxiety.sources.sourceButton")}
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>{t("anxiety.sources.nice.title")}</h3>
              <p>{t("anxiety.sources.nice.description")}</p>

              <a
                href="https://www.nice.org.uk/guidance/cg142"
                target="_blank"
                rel="noreferrer"
              >
                {t("anxiety.sources.sourceButton")}
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-journal-medical"></i>

            <div>
              <h3>{t("anxiety.sources.pubmedAdults.title")}</h3>
              <p>{t("anxiety.sources.pubmedAdults.description")}</p>

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30178724/"
                target="_blank"
                rel="noreferrer"
              >
                {t("anxiety.sources.studyButton")}
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-journal-check"></i>

            <div>
              <h3>{t("anxiety.sources.cbt.title")}</h3>
              <p>{t("anxiety.sources.cbt.description")}</p>

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/34598734/"
                target="_blank"
                rel="noreferrer"
              >
                {t("anxiety.sources.studyButton")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Anxiety;
