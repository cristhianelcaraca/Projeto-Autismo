import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./RoutineOrganization.css";

function RoutineOrganization() {
  const { t } = useTranslation();

  return (
    <main className="routine-page">
      {/* HERO */}
      <section className="routine-hero">
        <div className="container routine-container">
          <div className="routine-hero-content">
            <div className="routine-hero-text">
              <span className="routine-label">
                {t("routineOrganization.hero.label")}
              </span>

              <h1>{t("routineOrganization.hero.title")}</h1>

              <p>{t("routineOrganization.hero.paragraph1")}</p>

              <p>{t("routineOrganization.hero.paragraph2")}</p>
            </div>

            <div className="routine-hero-icon">
              <i className="bi bi-calendar-check"></i>
            </div>
          </div>
        </div>
      </section>

      {/* PREVISIBILIDADE */}
      <section className="routine-predictability">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.predictability.label")}
            </span>

            <h2>{t("routineOrganization.predictability.title")}</h2>

            <p>{t("routineOrganization.predictability.description")}</p>
          </div>

          <div className="routine-benefits-grid">
            <article className="routine-benefit-card blue">
              <i className="bi bi-question-circle"></i>
              <h3>
                {t("routineOrganization.predictability.uncertainty.title")}
              </h3>
              <p>
                {t(
                  "routineOrganization.predictability.uncertainty.description",
                )}
              </p>
            </article>

            <article className="routine-benefit-card green">
              <i className="bi bi-arrow-left-right"></i>
              <h3>
                {t("routineOrganization.predictability.transitions.title")}
              </h3>
              <p>
                {t(
                  "routineOrganization.predictability.transitions.description",
                )}
              </p>
            </article>

            <article className="routine-benefit-card purple">
              <i className="bi bi-list-check"></i>
              <h3>{t("routineOrganization.predictability.decisions.title")}</h3>
              <p>
                {t("routineOrganization.predictability.decisions.description")}
              </p>
            </article>

            <article className="routine-benefit-card yellow">
              <i className="bi bi-clock-history"></i>
              <h3>
                {t("routineOrganization.predictability.preparation.title")}
              </h3>
              <p>
                {t(
                  "routineOrganization.predictability.preparation.description",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROTINA X RIGIDEZ */}
      <section className="routine-flexibility">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.flexibility.label")}
            </span>

            <h2>{t("routineOrganization.flexibility.title")}</h2>
          </div>

          <div className="routine-compare-grid">
            <article className="routine-compare-card helpful">
              <div className="routine-compare-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <h3>{t("routineOrganization.flexibility.helpful.title")}</h3>

              <ul>
                {t("routineOrganization.flexibility.helpful.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="routine-compare-card difficult">
              <div className="routine-compare-icon">
                <i className="bi bi-exclamation-circle"></i>
              </div>

              <h3>{t("routineOrganization.flexibility.difficult.title")}</h3>

              <ul>
                {t("routineOrganization.flexibility.difficult.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="routine-flexibility-note">
            <i className="bi bi-info-circle"></i>
            <p>{t("routineOrganization.flexibility.note")}</p>
          </div>
        </div>
      </section>

      {/* ORGANIZAR VISUALMENTE */}
      <section className="routine-visual">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.visual.label")}
            </span>

            <h2>{t("routineOrganization.visual.title")}</h2>

            <p>{t("routineOrganization.visual.description")}</p>
          </div>

          <div className="routine-tools-grid">
            <article>
              <i className="bi bi-calendar3"></i>
              <span>{t("routineOrganization.visual.tools.calendar")}</span>
            </article>

            <article>
              <i className="bi bi-card-checklist"></i>
              <span>{t("routineOrganization.visual.tools.checklist")}</span>
            </article>

            <article>
              <i className="bi bi-grid-3x3-gap"></i>
              <span>{t("routineOrganization.visual.tools.weeklyBoard")}</span>
            </article>

            <article>
              <i className="bi bi-alarm"></i>
              <span>{t("routineOrganization.visual.tools.alarms")}</span>
            </article>

            <article>
              <i className="bi bi-phone"></i>
              <span>{t("routineOrganization.visual.tools.apps")}</span>
            </article>

            <article>
              <i className="bi bi-sticky"></i>
              <span>{t("routineOrganization.visual.tools.postIts")}</span>
            </article>
          </div>

          <div className="routine-visual-highlight">
            <i className="bi bi-lightbulb"></i>

            <p>
              <strong>{t("routineOrganization.visual.highlightStrong")}</strong>{" "}
              {t("routineOrganization.visual.highlight")}
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDIR TAREFAS */}
      <section className="routine-steps">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.steps.label")}
            </span>

            <h2>{t("routineOrganization.steps.title")}</h2>

            <p>{t("routineOrganization.steps.description")}</p>
          </div>

          <div className="routine-example-grid">
            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-house"></i>
                <h3>{t("routineOrganization.steps.room.title")}</h3>
              </div>

              <ol>
                {t("routineOrganization.steps.room.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-folder2-open"></i>
                <h3>{t("routineOrganization.steps.documents.title")}</h3>
              </div>

              <ol>
                {t("routineOrganization.steps.documents.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      {/* INICIAÇÃO */}
      <section className="routine-initiation">
        <div className="container routine-container">
          <div className="routine-initiation-box">
            <div className="routine-initiation-icon">
              <i className="bi bi-play-circle"></i>
            </div>

            <div>
              <span className="routine-section-label">
                {t("routineOrganization.initiation.label")}
              </span>

              <h2>{t("routineOrganization.initiation.title")}</h2>

              <p>{t("routineOrganization.initiation.description")}</p>

              <ul>
                {t("routineOrganization.initiation.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="routine-initiation-highlight">
                <strong>{t("routineOrganization.initiation.highlight")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÕES */}
      <section className="routine-transitions">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.transitions.label")}
            </span>

            <h2>{t("routineOrganization.transitions.title")}</h2>

            <p>{t("routineOrganization.transitions.description")}</p>
          </div>

          <div className="routine-transition-examples">
            {t("routineOrganization.transitions.examples", {
              returnObjects: true,
            }).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="routine-transition-help">
            <article>
              <i className="bi bi-bell"></i>
              <h3>{t("routineOrganization.transitions.warning.title")}</h3>
              <p>{t("routineOrganization.transitions.warning.description")}</p>
            </article>

            <article>
              <i className="bi bi-hourglass-split"></i>
              <h3>{t("routineOrganization.transitions.timer.title")}</h3>
              <p>{t("routineOrganization.transitions.timer.description")}</p>
            </article>

            <article>
              <i className="bi bi-arrow-right-circle"></i>
              <h3>{t("routineOrganization.transitions.next.title")}</h3>
              <p>{t("routineOrganization.transitions.next.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* TEMPO */}
      <section className="routine-time">
        <div className="container routine-container">
          <div className="routine-time-box">
            <div className="routine-time-icon">
              <i className="bi bi-clock"></i>
            </div>

            <div>
              <span className="routine-section-label">
                {t("routineOrganization.time.label")}
              </span>

              <h2>{t("routineOrganization.time.title")}</h2>

              <p>{t("routineOrganization.time.paragraph1")}</p>

              <div className="routine-time-examples">
                <div>
                  <span className="routine-time-bad">
                    {t("routineOrganization.time.vague")}
                  </span>
                </div>

                <i className="bi bi-arrow-right"></i>

                <div>
                  <span className="routine-time-good">
                    {t("routineOrganization.time.specific")}
                  </span>
                </div>
              </div>

              <p>{t("routineOrganization.time.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MUDANÇAS */}
      <section className="routine-changes">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.changes.label")}
            </span>

            <h2>{t("routineOrganization.changes.title")}</h2>
          </div>

          <div className="routine-change-flow">
            <article>
              <span>{t("routineOrganization.changes.planA.label")}</span>
              <h3>{t("routineOrganization.changes.planA.text")}</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>{t("routineOrganization.changes.change.label")}</span>
              <h3>{t("routineOrganization.changes.change.text")}</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>{t("routineOrganization.changes.newPlan.label")}</span>
              <h3>{t("routineOrganization.changes.newPlan.text")}</h3>
            </article>
          </div>

          <div className="routine-changes-highlight">
            <i className="bi bi-info-circle"></i>

            <p>
              {t("routineOrganization.changes.highlightBefore")}{" "}
              <strong>{t("routineOrganization.changes.whatChanged")}</strong>,{" "}
              {t("routineOrganization.changes.highlightMiddle")}{" "}
              <strong>{t("routineOrganization.changes.whatStayed")}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ENERGIA */}
      <section className="routine-energy">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.energy.label")}
            </span>

            <h2>{t("routineOrganization.energy.title")}</h2>

            <p>{t("routineOrganization.energy.description")}</p>
          </div>

          <div className="routine-energy-grid">
            <article>
              <i className="bi bi-briefcase"></i>
              <span>{t("routineOrganization.energy.items.workSchool")}</span>
            </article>

            <article>
              <i className="bi bi-person-vcard"></i>
              <span>{t("routineOrganization.energy.items.appointments")}</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>{t("routineOrganization.energy.items.socialEvents")}</span>
            </article>

            <article>
              <i className="bi bi-bus-front"></i>
              <span>{t("routineOrganization.energy.items.travel")}</span>
            </article>

            <article>
              <i className="bi bi-volume-up"></i>
              <span>{t("routineOrganization.energy.items.sensory")}</span>
            </article>

            <article>
              <i className="bi bi-chat-dots"></i>
              <span>
                {t("routineOrganization.energy.items.socialInteraction")}
              </span>
            </article>
          </div>

          <div className="routine-energy-note">
            <i className="bi bi-battery-half"></i>

            <p>{t("routineOrganization.energy.note")}</p>
          </div>
        </div>
      </section>

      {/* CRIANÇAS */}
      <section className="routine-children">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.children.label")}
            </span>

            <h2>{t("routineOrganization.children.title")}</h2>
          </div>

          <div className="routine-child-grid">
            <article className="routine-child-card morning">
              <div className="routine-child-heading">
                <i className="bi bi-sun"></i>
                <h3>{t("routineOrganization.children.morning.title")}</h3>
              </div>

              <ol>
                {t("routineOrganization.children.morning.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="routine-child-card afternoon">
              <div className="routine-child-heading">
                <i className="bi bi-house-heart"></i>
                <h3>{t("routineOrganization.children.afterSchool.title")}</h3>
              </div>

              <ol>
                {t("routineOrganization.children.afterSchool.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>

          <div className="routine-child-note">
            <i className="bi bi-heart"></i>
            <p>{t("routineOrganization.children.note")}</p>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="routine-adults">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.adults.label")}
            </span>

            <h2>{t("routineOrganization.adults.title")}</h2>

            <p>{t("routineOrganization.adults.description")}</p>
          </div>

          <div className="routine-priority-grid">
            <article className="today">
              <span>{t("routineOrganization.adults.today.label")}</span>
              <p>{t("routineOrganization.adults.today.text")}</p>
            </article>

            <article className="week">
              <span>{t("routineOrganization.adults.week.label")}</span>
              <p>{t("routineOrganization.adults.week.text")}</p>
            </article>

            <article className="later">
              <span>{t("routineOrganization.adults.later.label")}</span>
              <p>{t("routineOrganization.adults.later.text")}</p>
            </article>
          </div>

          <div className="routine-adult-note">
            <i className="bi bi-list-ul"></i>
            <p>{t("routineOrganization.adults.note")}</p>
          </div>
        </div>
      </section>

      {/* EXTERNALIZAR MEMÓRIA */}
      <section className="routine-memory">
        <div className="container routine-container">
          <div className="routine-memory-box">
            <div className="routine-memory-icon">
              <i className="bi bi-bell"></i>
            </div>

            <div>
              <span className="routine-section-label">
                {t("routineOrganization.memory.label")}
              </span>

              <h2>{t("routineOrganization.memory.title")}</h2>

              <p>{t("routineOrganization.memory.description")}</p>

              <div className="routine-memory-list">
                {t("routineOrganization.memory.items", {
                  returnObjects: true,
                }).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="routine-memory-highlight">
                <strong>{t("routineOrganization.memory.highlight")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUGARES FIXOS */}
      <section className="routine-places">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.places.label")}
            </span>

            <h2>{t("routineOrganization.places.title")}</h2>

            <p>{t("routineOrganization.places.description")}</p>
          </div>

          <div className="routine-places-grid">
            <article>
              <i className="bi bi-key"></i>
              <span>{t("routineOrganization.places.items.keys")}</span>
            </article>

            <article>
              <i className="bi bi-wallet2"></i>
              <span>{t("routineOrganization.places.items.wallet")}</span>
            </article>

            <article>
              <i className="bi bi-file-earmark-text"></i>
              <span>{t("routineOrganization.places.items.documents")}</span>
            </article>

            <article>
              <i className="bi bi-backpack"></i>
              <span>{t("routineOrganization.places.items.backpack")}</span>
            </article>

            <article>
              <i className="bi bi-capsule"></i>
              <span>{t("routineOrganization.places.items.medication")}</span>
            </article>

            <article>
              <i className="bi bi-lightning-charge"></i>
              <span>{t("routineOrganization.places.items.chargers")}</span>
            </article>
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="routine-environment">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.environment.label")}
            </span>

            <h2>{t("routineOrganization.environment.title")}</h2>

            <p>{t("routineOrganization.environment.description")}</p>
          </div>

          <div className="routine-environment-grid">
            {t("routineOrganization.environment.items", {
              returnObjects: true,
            }).map((item) => (
              <div key={item}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUANDO DEIXA DE FUNCIONAR */}
      <section className="routine-change-strategy">
        <div className="container routine-container">
          <div className="routine-change-strategy-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <span className="routine-section-label">
                {t("routineOrganization.changeStrategy.label")}
              </span>

              <h2>{t("routineOrganization.changeStrategy.title")}</h2>

              <p>{t("routineOrganization.changeStrategy.paragraph1")}</p>

              <p>{t("routineOrganization.changeStrategy.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KIT */}
      <section className="routine-kit">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.kit.label")}
            </span>

            <h2>{t("routineOrganization.kit.title")}</h2>
          </div>

          <div className="routine-kit-grid">
            <article>
              <i className="bi bi-calendar3"></i>
              <h3>{t("routineOrganization.kit.items.calendar")}</h3>
            </article>

            <article>
              <i className="bi bi-hourglass-split"></i>
              <h3>{t("routineOrganization.kit.items.timer")}</h3>
            </article>

            <article>
              <i className="bi bi-card-checklist"></i>
              <h3>{t("routineOrganization.kit.items.checklist")}</h3>
            </article>

            <article>
              <i className="bi bi-grid"></i>
              <h3>{t("routineOrganization.kit.items.weeklyBoard")}</h3>
            </article>

            <article>
              <i className="bi bi-bell"></i>
              <h3>{t("routineOrganization.kit.items.alarms")}</h3>
            </article>

            <article>
              <i className="bi bi-tags"></i>
              <h3>{t("routineOrganization.kit.items.labels")}</h3>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE PODE NÃO AJUDAR */}
      <section className="routine-not-helpful">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.notHelpful.label")}
            </span>

            <h2>{t("routineOrganization.notHelpful.title")}</h2>
          </div>

          <div className="routine-not-helpful-list">
            {t("routineOrganization.notHelpful.items", {
              returnObjects: true,
            }).map((item) => (
              <div key={item}>
                <i className="bi bi-x-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="routine-related">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {t("routineOrganization.related.label")}
            </span>

            <h2>{t("routineOrganization.related.title")}</h2>
          </div>

          <div className="routine-related-grid">
            <article>
              <div className="routine-related-icon anxiety">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>{t("routineOrganization.related.anxiety.title")}</h3>

              <p>{t("routineOrganization.related.anxiety.description")}</p>

              <Link to="/ansiedade">
                {t("routineOrganization.related.anxiety.button")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>

            <article>
              <div className="routine-related-icon overload">
                <i className="bi bi-cloud-lightning-rain"></i>
              </div>

              <h3>{t("routineOrganization.related.overload.title")}</h3>

              <p>{t("routineOrganization.related.overload.description")}</p>

              <Link to="/crises-sobrecarga">
                {t("routineOrganization.related.overload.button")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoutineOrganization;
