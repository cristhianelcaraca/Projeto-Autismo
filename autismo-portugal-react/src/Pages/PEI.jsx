import { useTranslation } from "react-i18next";
import "./PEI.css";

function PEI() {
  const { t } = useTranslation();

  return (
    <main className="pei-page">
      {/* HERO */}
      <section className="pei-hero">
        <div className="container pei-container">
          <div className="pei-hero-content">
            <span className="pei-label">{t("pei.hero.label")}</span>

            <h1>{t("pei.hero.title")}</h1>

            <p>{t("pei.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="pei-what">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.what.label")}</span>

            <h2>{t("pei.what.title")}</h2>

            <p>{t("pei.what.description")}</p>
          </div>

          <div className="pei-simple-box">
            <div className="pei-simple-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <div>
              <h3>{t("pei.what.simpleTitle")}</h3>

              <p>{t("pei.what.simpleDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É AUTOMÁTICO */}
      <section className="pei-important">
        <div className="container pei-container">
          <div className="pei-important-box">
            <div className="pei-important-icon">
              <i className="bi bi-info-lg"></i>
            </div>

            <div>
              <span>{t("pei.important.label")}</span>

              <h2>{t("pei.important.title")}</h2>

              <p>{t("pei.important.paragraph1")}</p>

              <p>{t("pei.important.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO SABER */}
      <section className="pei-how-to-know">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">
              {t("pei.howToKnow.label")}
            </span>

            <h2>{t("pei.howToKnow.title")}</h2>

            <p>{t("pei.howToKnow.description")}</p>
          </div>

          <div className="pei-comparison-grid">
            <article className="pei-comparison-card no-pei">
              <div className="pei-comparison-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <h3>{t("pei.howToKnow.noPei.title")}</h3>

              <ul>
                {t("pei.howToKnow.noPei.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="pei-comparison-card yes-pei">
              <div className="pei-comparison-icon">
                <i className="bi bi-file-earmark-check"></i>
              </div>

              <h3>{t("pei.howToKnow.yesPei.title")}</h3>

              <ul>
                {t("pei.howToKnow.yesPei.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="pei-question-box">
            <i className="bi bi-question-circle"></i>

            <div>
              <strong>{t("pei.howToKnow.questionLabel")}</strong>

              <p>{t("pei.howToKnow.question")}</p>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* EMAEI */}
      <section className="pei-emaei">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.emaei.label")}</span>

            <h2>{t("pei.emaei.title")}</h2>

            <p>{t("pei.emaei.description")}</p>
          </div>

          <div className="pei-emaei-box">
            <div className="pei-emaei-icon">
              <i className="bi bi-people"></i>
            </div>

            <div className="pei-emaei-content">
              <h3>{t("pei.emaei.simpleTitle")}</h3>

              <p>{t("pei.emaei.paragraph1")}</p>

              <p>{t("pei.emaei.paragraph2")}</p>
            </div>
          </div>

          <div className="pei-emaei-grid">
            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon green">
                <i className="bi bi-search"></i>
              </div>

              <h3>{t("pei.emaei.needs.title")}</h3>

              <p>{t("pei.emaei.needs.description")}</p>
            </article>

            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon blue">
                <i className="bi bi-list-check"></i>
              </div>

              <h3>{t("pei.emaei.measures.title")}</h3>

              <p>{t("pei.emaei.measures.description")}</p>
            </article>

            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon purple">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h3>{t("pei.emaei.results.title")}</h3>

              <p>{t("pei.emaei.results.description")}</p>
            </article>
          </div>

          <div className="pei-emaei-parent-note">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>{t("pei.emaei.parents.title")}</h3>

              <p>{t("pei.emaei.parents.paragraph1")}</p>

              <p>{t("pei.emaei.parents.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RTP */}
      <section className="pei-rtp">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.rtp.label")}</span>

            <h2>{t("pei.rtp.title")}</h2>

            <p>{t("pei.rtp.description")}</p>
          </div>

          <div className="pei-rtp-box">
            <div className="pei-rtp-icon">
              <i className="bi bi-journal-check"></i>
            </div>

            <div>
              <h3>{t("pei.rtp.boxTitle")}</h3>

              <p>{t("pei.rtp.paragraph1")}</p>

              <p>{t("pei.rtp.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RTP OU PEI */}
      <section className="pei-flow">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.flow.label")}</span>

            <h2>{t("pei.flow.title")}</h2>
          </div>

          <div className="pei-flow-chart">
            <div className="pei-flow-item">
              <span>1</span>

              <div>
                <h3>{t("pei.flow.step1.title")}</h3>

                <p>{t("pei.flow.step1.description")}</p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-item">
              <span>2</span>

              <div>
                <h3>{t("pei.flow.step2.title")}</h3>

                <p>{t("pei.flow.step2.description")}</p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-options">
              <div className="pei-flow-option green">
                <strong>{t("pei.flow.universal.title")}</strong>

                <p>{t("pei.flow.universal.description")}</p>
              </div>

              <div className="pei-flow-option blue">
                <strong>{t("pei.flow.selective.title")}</strong>

                <p>{t("pei.flow.selective.description")}</p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-question">
              <strong>{t("pei.flow.question")}</strong>

              <div className="pei-flow-answer">
                <span className="answer-no">{t("pei.flow.no")}</span>

                <span className="answer-yes">{t("pei.flow.yes")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE CONSTA NO PEI */}
      <section className="pei-contents">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.contents.label")}</span>

            <h2>{t("pei.contents.title")}</h2>

            <p>{t("pei.contents.description")}</p>
          </div>

          <ul className="pei-check-list">
            {t("pei.contents.items", { returnObjects: true }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="pei-request">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.request.label")}</span>

            <h2>{t("pei.request.title")}</h2>

            <p>{t("pei.request.description")}</p>
          </div>

          <div className="pei-request-highlight">
            <i className="bi bi-envelope-paper"></i>

            <div>
              <h3>{t("pei.request.highlight.title")}</h3>

              <p>{t("pei.request.highlight.description")}</p>
            </div>
          </div>

          <div className="pei-request-steps">
            {t("pei.request.steps", { returnObjects: true }).map(
              (step, index) => (
                <div className="pei-request-step" key={step.title}>
                  <span>{index + 1}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="pei-request-example">
            <span>{t("pei.request.exampleLabel")}</span>

            <p>{t("pei.request.example")}</p>
          </div>
        </div>
      </section>

      {/* E SE NÃO CONCORDAR */}
      <section className="pei-disagreement">
        <div className="container pei-container">
          <div className="pei-disagreement-box">
            <div className="pei-disagreement-icon">
              <i className="bi bi-chat-square-text"></i>
            </div>

            <div>
              <span className="pei-section-label">
                {t("pei.disagreement.label")}
              </span>

              <h2>{t("pei.disagreement.title")}</h2>

              <p>{t("pei.disagreement.paragraph1")}</p>

              <p>{t("pei.disagreement.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="pei-experience">
        <div className="container pei-container">
          <div className="pei-experience-box">
            <div className="pei-experience-image">
              <img
                src="/images/support.png"
                alt={t("pei.experience.imageAlt")}
              />
            </div>

            <div className="pei-experience-content">
              <span className="pei-section-label">
                {t("pei.experience.label")}
              </span>

              <h2>{t("pei.experience.title")}</h2>

              <p>{t("pei.experience.paragraph1")}</p>

              <p>{t("pei.experience.paragraph2")}</p>

              <p>{t("pei.experience.paragraph3")}</p>

              <p>{t("pei.experience.paragraph4")}</p>

              <div className="pei-experience-note">
                {t("pei.experience.note")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="pei-parent-checklist">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">
              {t("pei.checklist.label")}
            </span>

            <h2>{t("pei.checklist.title")}</h2>
          </div>

          <ul className="pei-parent-check-list">
            {t("pei.checklist.items", { returnObjects: true }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FONTES */}
      <section className="pei-sources">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">{t("pei.sources.label")}</span>

            <h2>{t("pei.sources.title")}</h2>
          </div>

          <div className="pei-source-card">
            <i className="bi bi-shield-check"></i>

            <div>
              <h3>Decreto-Lei n.º 54/2018</h3>

              <p>{t("pei.sources.law.description")}</p>

              <a
                href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/54-2018-115652961"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("pei.sources.law.button")}
              </a>
            </div>
          </div>

          <div className="pei-source-card">
            <i className="bi bi-journal-text"></i>

            <div>
              <h3>{t("pei.sources.dge.title")}</h3>

              <p>{t("pei.sources.dge.description")}</p>

              <a
                href="https://www.dge.mec.pt/node/461"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("pei.sources.dge.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PEI;
