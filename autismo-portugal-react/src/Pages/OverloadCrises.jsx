import { useTranslation } from "react-i18next";
import "./OverloadCrises.css";

function OverloadCrises() {
  const { t } = useTranslation();

  return (
    <main className="overload-page">
      {/* HERO */}
      <section className="overload-hero">
        <div className="container overload-container">
          <div className="overload-hero-content">
            <div className="overload-hero-text">
              <span className="overload-label">
                {t("overloadCrises.hero.label")}
              </span>

              <h1>{t("overloadCrises.hero.title")}</h1>

              <p>{t("overloadCrises.hero.paragraph1")}</p>

              <p>{t("overloadCrises.hero.paragraph2")}</p>
            </div>

            <div className="overload-hero-icon">
              <i className="bi bi-cloud-lightning-rain"></i>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É SOBRECARGA */}
      <section className="overload-understanding">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.understanding.label")}
            </span>

            <h2>{t("overloadCrises.understanding.title")}</h2>

            <p>{t("overloadCrises.understanding.description")}</p>
          </div>

          <div className="overload-causes-grid">
            <article className="overload-cause-card sensory">
              <div className="overload-cause-icon">
                <i className="bi bi-volume-up"></i>
              </div>

              <h3>{t("overloadCrises.understanding.sensory.title")}</h3>
              <p>{t("overloadCrises.understanding.sensory.description")}</p>
            </article>

            <article className="overload-cause-card emotional">
              <div className="overload-cause-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>{t("overloadCrises.understanding.emotional.title")}</h3>
              <p>{t("overloadCrises.understanding.emotional.description")}</p>
            </article>

            <article className="overload-cause-card social">
              <div className="overload-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("overloadCrises.understanding.social.title")}</h3>
              <p>{t("overloadCrises.understanding.social.description")}</p>
            </article>

            <article className="overload-cause-card demands">
              <div className="overload-cause-icon">
                <i className="bi bi-list-check"></i>
              </div>

              <h3>{t("overloadCrises.understanding.demands.title")}</h3>
              <p>{t("overloadCrises.understanding.demands.description")}</p>
            </article>

            <article className="overload-cause-card routine">
              <div className="overload-cause-icon">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h3>{t("overloadCrises.understanding.routine.title")}</h3>
              <p>{t("overloadCrises.understanding.routine.description")}</p>
            </article>

            <article className="overload-cause-card fatigue">
              <div className="overload-cause-icon">
                <i className="bi bi-battery-half"></i>
              </div>

              <h3>{t("overloadCrises.understanding.fatigue.title")}</h3>
              <p>{t("overloadCrises.understanding.fatigue.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="overload-signs">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.signs.label")}
            </span>

            <h2>{t("overloadCrises.signs.title")}</h2>

            <p>{t("overloadCrises.signs.description")}</p>
          </div>

          <div className="overload-signs-grid">
            {t("overloadCrises.signs.items", { returnObjects: true }).map(
              (item) => (
                <div className="overload-sign-item" key={item}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>

          <div className="overload-signs-note">
            <i className="bi bi-lightbulb"></i>
            <p>{t("overloadCrises.signs.note")}</p>
          </div>
        </div>
      </section>

      {/* MELTDOWN E SHUTDOWN */}
      <section className="overload-types">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.types.label")}
            </span>

            <h2>{t("overloadCrises.types.title")}</h2>

            <p>{t("overloadCrises.types.description")}</p>
          </div>

          <div className="overload-types-grid">
            <article className="overload-type-card meltdown">
              <div className="overload-type-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>Meltdown</h3>

              <p>{t("overloadCrises.types.meltdown.description")}</p>

              <p>{t("overloadCrises.types.examples")}</p>

              <ul>
                {t("overloadCrises.types.meltdown.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="overload-type-note">
                <strong>{t("overloadCrises.types.meltdown.noteStrong")}</strong>

                <p>{t("overloadCrises.types.meltdown.note")}</p>
              </div>
            </article>

            <article className="overload-type-card shutdown">
              <div className="overload-type-icon">
                <i className="bi bi-battery"></i>
              </div>

              <h3>Shutdown</h3>

              <p>{t("overloadCrises.types.shutdown.description")}</p>

              <p>{t("overloadCrises.types.examples")}</p>

              <ul>
                {t("overloadCrises.types.shutdown.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="overload-type-note">
                <strong>{t("overloadCrises.types.shutdown.noteStrong")}</strong>

                <p>{t("overloadCrises.types.shutdown.note")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DURANTE UMA CRISE */}
      <section className="overload-during">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.during.label")}
            </span>

            <h2>{t("overloadCrises.during.title")}</h2>

            <p>{t("overloadCrises.during.description")}</p>
          </div>

          <div className="overload-help-grid">
            <article className="overload-help-item">
              <i className="bi bi-volume-mute"></i>
              <h3>{t("overloadCrises.during.reduce.title")}</h3>
              <p>{t("overloadCrises.during.reduce.description")}</p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-chat-left-dots"></i>
              <h3>{t("overloadCrises.during.talk.title")}</h3>
              <p>{t("overloadCrises.during.talk.description")}</p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-door-open"></i>
              <h3>{t("overloadCrises.during.leave.title")}</h3>
              <p>{t("overloadCrises.during.leave.description")}</p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-hand-index"></i>
              <h3>{t("overloadCrises.during.touch.title")}</h3>
              <p>{t("overloadCrises.during.touch.description")}</p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-shield-check"></i>
              <h3>{t("overloadCrises.during.safety.title")}</h3>
              <p>{t("overloadCrises.during.safety.description")}</p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-hourglass-split"></i>
              <h3>{t("overloadCrises.during.time.title")}</h3>
              <p>{t("overloadCrises.during.time.description")}</p>
            </article>
          </div>

          <div className="overload-during-warning">
            <i className="bi bi-exclamation-triangle"></i>
            <p>{t("overloadCrises.during.warning")}</p>
          </div>
        </div>
      </section>

      {/* DEPOIS */}
      <section className="overload-recovery">
        <div className="container overload-container">
          <div className="overload-recovery-box">
            <div className="overload-recovery-icon">
              <i className="bi bi-battery-charging"></i>
            </div>

            <div>
              <span className="overload-section-label">
                {t("overloadCrises.recovery.label")}
              </span>

              <h2>{t("overloadCrises.recovery.title")}</h2>

              <p>{t("overloadCrises.recovery.description")}</p>

              <div className="overload-recovery-list">
                {t("overloadCrises.recovery.items", {
                  returnObjects: true,
                }).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="overload-recovery-note">
                <strong>{t("overloadCrises.recovery.noteStrong")}</strong>

                <p>{t("overloadCrises.recovery.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAR GATILHOS */}
      <section className="overload-triggers">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.triggers.label")}
            </span>

            <h2>{t("overloadCrises.triggers.title")}</h2>

            <p>{t("overloadCrises.triggers.description")}</p>
          </div>

          <div className="overload-observation-grid">
            <article>
              <i className="bi bi-volume-up"></i>
              <span>{t("overloadCrises.triggers.noise")}</span>
            </article>

            <article>
              <i className="bi bi-calendar-event"></i>
              <span>{t("overloadCrises.triggers.change")}</span>
            </article>

            <article>
              <i className="bi bi-moon-stars"></i>
              <span>{t("overloadCrises.triggers.sleep")}</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>{t("overloadCrises.triggers.social")}</span>
            </article>

            <article>
              <i className="bi bi-list-task"></i>
              <span>{t("overloadCrises.triggers.demands")}</span>
            </article>

            <article>
              <i className="bi bi-cup-straw"></i>
              <span>{t("overloadCrises.triggers.physical")}</span>
            </article>

            <article>
              <i className="bi bi-chat-square-text"></i>
              <span>{t("overloadCrises.triggers.communication")}</span>
            </article>

            <article>
              <i className="bi bi-battery-half"></i>
              <span>{t("overloadCrises.triggers.accumulation")}</span>
            </article>
          </div>
        </div>
      </section>

      {/* PREVENÇÃO */}
      <section className="overload-prevention">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.prevention.label")}
            </span>

            <h2>{t("overloadCrises.prevention.title")}</h2>

            <p>{t("overloadCrises.prevention.description")}</p>
          </div>

          <div className="overload-prevention-grid">
            {t("overloadCrises.prevention.items", {
              returnObjects: true,
            }).map((item) => (
              <div className="overload-prevention-item" key={item}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO */}
      <section className="overload-plan">
        <div className="container overload-container">
          <div className="overload-plan-box">
            <div className="overload-plan-icon">
              <i className="bi bi-journal-check"></i>
            </div>

            <div>
              <span className="overload-section-label">
                {t("overloadCrises.plan.label")}
              </span>

              <h2>{t("overloadCrises.plan.title")}</h2>

              <p>{t("overloadCrises.plan.description")}</p>

              <ul>
                {t("overloadCrises.plan.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="overload-sources">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              {t("overloadCrises.sources.label")}
            </span>

            <h2>{t("overloadCrises.sources.title")}</h2>
          </div>

          <article className="overload-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>NHS — Supporting an autistic child</h3>

              <p>{t("overloadCrises.sources.nhs.description")}</p>

              <a
                href="https://www.nhs.uk/conditions/autism/supporting-a-child/"
                target="_blank"
                rel="noreferrer"
              >
                {t("overloadCrises.sources.button")}
              </a>
            </div>
          </article>

          <article className="overload-source-card">
            <i className="bi bi-book"></i>

            <div>
              <h3>National Autistic Society</h3>

              <p>{t("overloadCrises.sources.nas.description")}</p>

              <a
                href="https://www.autism.org.uk/"
                target="_blank"
                rel="noreferrer"
              >
                {t("overloadCrises.sources.button")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default OverloadCrises;
