import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AnxietyCrises.css";

function AnxietyCrises() {
  const { t } = useTranslation();

  return (
    <main className="anxiety-page">
      {/* HERO */}
      <section className="anxiety-hero">
        <div className="container anxiety-container">
          <div className="anxiety-hero-content">
            <div className="anxiety-hero-image">
              <img
                src="/images/meltdown.png"
                alt={t("anxietyCrises.hero.imageAlt")}
              />
            </div>

            <div className="anxiety-hero-text">
              <span className="anxiety-label">
                {t("anxietyCrises.hero.label")}
              </span>

              <h1>{t("anxietyCrises.hero.title")}</h1>

              <p>{t("anxietyCrises.hero.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEM SEMPRE PARECE ANSIEDADE */}
      <section className="anxiety-signs">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              {t("anxietyCrises.signs.label")}
            </span>

            <h2>{t("anxietyCrises.signs.title")}</h2>

            <p>{t("anxietyCrises.signs.description")}</p>
          </div>

          <div className="anxiety-signs-grid">
            <div className="anxiety-sign-item">
              <i className="bi bi-house-door"></i>
              <span>{t("anxietyCrises.signs.items.schoolRefusal")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-heart-pulse"></i>
              <span>{t("anxietyCrises.signs.items.physical")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-cloud-rain"></i>
              <span>{t("anxietyCrises.signs.items.distress")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-moon-stars"></i>
              <span>{t("anxietyCrises.signs.items.sleep")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-calendar-event"></i>
              <span>{t("anxietyCrises.signs.items.predictability")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-battery-half"></i>
              <span>{t("anxietyCrises.signs.items.exhaustion")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-volume-mute"></i>
              <span>{t("anxietyCrises.signs.items.shutdown")}</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-lightning-charge"></i>
              <span>{t("anxietyCrises.signs.items.outbursts")}</span>
            </div>
          </div>

          <div className="anxiety-highlight">
            <i className="bi bi-info-circle"></i>

            <p>{t("anxietyCrises.signs.highlight")}</p>
          </div>
        </div>
      </section>

      {/* O QUE PODE ESTAR POR TRÁS */}
      <section className="anxiety-causes">
        <div className="container anxiety-container">
          <div className="anxiety-causes-image">
            <img
              src="/images/anxiety.png"
              alt={t("anxietyCrises.causes.imageAlt")}
            />
          </div>

          <div className="anxiety-section-heading left">
            <span className="anxiety-section-label">
              {t("anxietyCrises.causes.label")}
            </span>

            <h2>{t("anxietyCrises.causes.title")}</h2>

            <p>{t("anxietyCrises.causes.description")}</p>
          </div>

          <div className="anxiety-causes-grid">
            <article className="anxiety-cause-card sensory">
              <div className="anxiety-cause-icon">
                <i className="bi bi-ear"></i>
              </div>

              <h3>{t("anxietyCrises.causes.sensory.title")}</h3>
              <p>{t("anxietyCrises.causes.sensory.description")}</p>
            </article>

            <article className="anxiety-cause-card routine">
              <div className="anxiety-cause-icon">
                <i className="bi bi-shuffle"></i>
              </div>

              <h3>{t("anxietyCrises.causes.routine.title")}</h3>
              <p>{t("anxietyCrises.causes.routine.description")}</p>
            </article>

            <article className="anxiety-cause-card social">
              <div className="anxiety-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("anxietyCrises.causes.social.title")}</h3>
              <p>{t("anxietyCrises.causes.social.description")}</p>
            </article>

            <article className="anxiety-cause-card academic">
              <div className="anxiety-cause-icon">
                <i className="bi bi-pencil-square"></i>
              </div>

              <h3>{t("anxietyCrises.causes.academic.title")}</h3>
              <p>{t("anxietyCrises.causes.academic.description")}</p>
            </article>

            <article className="anxiety-cause-card transition">
              <div className="anxiety-cause-icon">
                <i className="bi bi-arrow-left-right"></i>
              </div>

              <h3>{t("anxietyCrises.causes.transition.title")}</h3>
              <p>{t("anxietyCrises.causes.transition.description")}</p>
            </article>

            <article className="anxiety-cause-card bullying">
              <div className="anxiety-cause-icon">
                <i className="bi bi-person-x"></i>
              </div>

              <h3>{t("anxietyCrises.causes.bullying.title")}</h3>
              <p>{t("anxietyCrises.causes.bullying.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* CRISE, MELTDOWN OU BIRRA */}
      <section className="anxiety-meltdown">
        <div className="container anxiety-container">
          <div className="anxiety-meltdown-image">
            <img
              src="/images/outburst.png"
              alt={t("anxietyCrises.meltdown.imageAlt")}
            />
          </div>

          <div className="anxiety-meltdown-content">
            <span className="anxiety-section-label">
              {t("anxietyCrises.meltdown.label")}
            </span>

            <h2>{t("anxietyCrises.meltdown.title")}</h2>

            <p>{t("anxietyCrises.meltdown.paragraph1")}</p>
            <p>{t("anxietyCrises.meltdown.paragraph2")}</p>

            <div className="shutdown-box">
              <i className="bi bi-volume-mute"></i>

              <div>
                <h3>{t("anxietyCrises.meltdown.shutdown.title")}</h3>

                <p>{t("anxietyCrises.meltdown.shutdown.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURANTE UMA CRISE */}
      <section className="anxiety-during">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              {t("anxietyCrises.during.label")}
            </span>

            <h2>{t("anxietyCrises.during.title")}</h2>

            <p>{t("anxietyCrises.during.description")}</p>
          </div>

          <div className="anxiety-help-grid">
            {t("anxietyCrises.during.items", {
              returnObjects: true,
            }).map((item) => (
              <div className="anxiety-help-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="anxiety-during-note">
            <i className="bi bi-heart"></i>

            <p>{t("anxietyCrises.during.note")}</p>
          </div>
        </div>
      </section>

      {/* DEPOIS DA CRISE */}
      <section className="anxiety-after">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              {t("anxietyCrises.after.label")}
            </span>

            <h2>{t("anxietyCrises.after.title")}</h2>

            <p>{t("anxietyCrises.after.description")}</p>
          </div>

          <div className="anxiety-observation-flow">
            <div>{t("anxietyCrises.after.questions.before")}</div>
            <i className="bi bi-arrow-down"></i>

            <div>{t("anxietyCrises.after.questions.where")}</div>
            <i className="bi bi-arrow-down"></i>

            <div>{t("anxietyCrises.after.questions.stimuli")}</div>
            <i className="bi bi-arrow-down"></i>

            <div>{t("anxietyCrises.after.questions.change")}</div>
            <i className="bi bi-arrow-down"></i>

            <div>{t("anxietyCrises.after.questions.demand")}</div>
            <i className="bi bi-arrow-down"></i>

            <div>{t("anxietyCrises.after.questions.recovery")}</div>
          </div>
        </div>
      </section>

      {/* EVITAMENTO ESCOLAR */}
      <section className="anxiety-avoidance">
        <div className="container anxiety-container">
          <div className="anxiety-avoidance-image">
            <img
              src="/images/avoidance.png"
              alt={t("anxietyCrises.avoidance.imageAlt")}
            />
          </div>

          <div className="anxiety-avoidance-content">
            <span className="anxiety-section-label">
              {t("anxietyCrises.avoidance.label")}
            </span>

            <h2>{t("anxietyCrises.avoidance.title")}</h2>

            <p>{t("anxietyCrises.avoidance.paragraph1")}</p>
            <p>{t("anxietyCrises.avoidance.paragraph2")}</p>

            <div className="anxiety-avoidance-highlight">
              <i className="bi bi-exclamation-circle"></i>

              <p>{t("anxietyCrises.avoidance.highlight")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE A ESCOLA PODE FAZER */}
      <section className="anxiety-school-support">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              {t("anxietyCrises.schoolSupport.label")}
            </span>

            <h2>{t("anxietyCrises.schoolSupport.title")}</h2>
          </div>

          <div className="anxiety-school-grid">
            <div className="anxiety-school-item">
              <i className="bi bi-calendar-check"></i>
              <p>{t("anxietyCrises.schoolSupport.items.routine")}</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-door-open"></i>
              <p>{t("anxietyCrises.schoolSupport.items.quietSpace")}</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-pause-circle"></i>
              <p>{t("anxietyCrises.schoolSupport.items.breaks")}</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-person-check"></i>
              <p>{t("anxietyCrises.schoolSupport.items.adult")}</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-sliders"></i>
              <p>{t("anxietyCrises.schoolSupport.items.adapt")}</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-people"></i>
              <p>{t("anxietyCrises.schoolSupport.items.teamwork")}</p>
            </div>
          </div>

          <div className="anxiety-links">
            <Link to="/medidas-suporte" className="anxiety-button">
              {t("anxietyCrises.schoolSupport.supportButton")}
            </Link>

            <Link to="/direitos-escola" className="anxiety-button secondary">
              {t("anxietyCrises.schoolSupport.rightsButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FALAR COM A ESCOLA */}
      <section className="anxiety-communication">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              {t("anxietyCrises.communication.label")}
            </span>

            <h2>{t("anxietyCrises.communication.title")}</h2>

            <p>{t("anxietyCrises.communication.description")}</p>
          </div>

          <div className="anxiety-example-box">
            <span>{t("anxietyCrises.communication.exampleLabel")}</span>

            <p>{t("anxietyCrises.communication.example")}</p>
          </div>

          <p className="anxiety-record-note">
            {t("anxietyCrises.communication.note")}
          </p>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="anxiety-experience">
        <div className="container anxiety-container">
          <div className="anxiety-experience-box">
            <span className="anxiety-section-label">
              {t("anxietyCrises.experience.label")}
            </span>

            <h2>{t("anxietyCrises.experience.title")}</h2>

            <p>
              {t("anxietyCrises.experience.paragraph1Before")}{" "}
              <strong>{t("anxietyCrises.experience.quote")}</strong>
            </p>

            <p>{t("anxietyCrises.experience.paragraph2")}</p>
            <p>{t("anxietyCrises.experience.paragraph3")}</p>
            <p>{t("anxietyCrises.experience.paragraph4")}</p>

            <p>
              {t("anxietyCrises.experience.paragraph5Before")}{" "}
              <strong>{t("anxietyCrises.experience.comment")}</strong>
            </p>

            <p>{t("anxietyCrises.experience.paragraph6")}</p>
            <p>{t("anxietyCrises.experience.paragraph7")}</p>
            <p>{t("anxietyCrises.experience.paragraph8")}</p>

            <div className="anxiety-experience-note">
              {t("anxietyCrises.experience.note")}
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO PROCURAR AJUDA */}
      <section className="anxiety-professional-help">
        <div className="container anxiety-container">
          <div className="anxiety-professional-box">
            <div className="anxiety-professional-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>

            <div>
              <span className="anxiety-section-label">
                {t("anxietyCrises.professional.label")}
              </span>

              <h2>{t("anxietyCrises.professional.title")}</h2>

              <p>{t("anxietyCrises.professional.paragraph1")}</p>
              <p>{t("anxietyCrises.professional.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AnxietyCrises;
