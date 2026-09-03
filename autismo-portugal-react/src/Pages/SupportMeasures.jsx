import { useTranslation } from "react-i18next";
import "./SupportMeasures.css";

function SupportMeasures() {
  const { t } = useTranslation();

  const universalItems = t("supportMeasures.universal.items", {
    returnObjects: true,
  });

  const selectiveItems = t("supportMeasures.selective.items", {
    returnObjects: true,
  });

  const additionalItems = t("supportMeasures.additional.items", {
    returnObjects: true,
  });

  return (
    <section className="support-measures">
      <div className="container support-measures-container">
        <div className="support-measures-heading">
          <span className="support-measures-label">
            {t("supportMeasures.hero.label")}
          </span>

          <h2>{t("supportMeasures.hero.title")}</h2>

          <p>{t("supportMeasures.hero.description")}</p>
        </div>

        <div className="support-measures-intro">
          <div className="support-measures-intro-icon">
            <i className="bi bi-lightbulb"></i>
          </div>

          <p>{t("supportMeasures.intro")}</p>
        </div>

        <div className="support-measures-grid">
          {/* MEDIDAS UNIVERSAIS */}
          <article className="support-measure-card universal">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <span className="support-measure-level">
                  {t("supportMeasures.universal.level")}
                </span>

                <h3>{t("supportMeasures.universal.title")}</h3>
              </div>
            </div>

            <p className="support-measure-description">
              {t("supportMeasures.universal.description")}
            </p>

            <ul className="support-measure-list">
              {universalItems.map((item) => (
                <li key={item}>
                  <span className="measure-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="support-measure-example">
              <strong>{t("supportMeasures.universal.example.title")}</strong>

              <p>{t("supportMeasures.universal.example.description")}</p>
            </div>
          </article>

          {/* MEDIDAS SELETIVAS */}
          <article className="support-measure-card selective">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <div>
                <span className="support-measure-level">
                  {t("supportMeasures.selective.level")}
                </span>

                <h3>{t("supportMeasures.selective.title")}</h3>
              </div>
            </div>

            <p className="support-measure-description">
              {t("supportMeasures.selective.description")}
            </p>

            <ul className="support-measure-list">
              {selectiveItems.map((item) => (
                <li key={item}>
                  <span className="measure-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="support-measure-example">
              <strong>{t("supportMeasures.selective.example.title")}</strong>

              <p>{t("supportMeasures.selective.example.description")}</p>
            </div>
          </article>

          {/* MEDIDAS ADICIONAIS */}
          <article className="support-measure-card additional">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-stars"></i>
              </div>

              <div>
                <span className="support-measure-level">
                  {t("supportMeasures.additional.level")}
                </span>

                <h3>{t("supportMeasures.additional.title")}</h3>
              </div>
            </div>

            <p className="support-measure-description">
              {t("supportMeasures.additional.description")}
            </p>

            <ul className="support-measure-list">
              {additionalItems.map((item) => (
                <li key={item}>
                  <span className="measure-check">
                    <i className="bi bi-check-lg"></i>
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="support-measure-example">
              <strong>{t("supportMeasures.additional.example.title")}</strong>

              <p>{t("supportMeasures.additional.example.description")}</p>
            </div>
          </article>
        </div>

        <div className="support-measures-note">
          <div className="support-measures-note-icon">
            <i className="bi bi-arrow-repeat"></i>
          </div>

          <div>
            <h3>{t("supportMeasures.note.title")}</h3>

            <p>{t("supportMeasures.note.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportMeasures;
