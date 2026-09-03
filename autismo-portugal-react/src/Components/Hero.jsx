import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="melting">
              <img src="/images/melting.png" alt="" aria-hidden="true" />
            </span>

            <h1>
              <span className="title-line">
                <span className="info">{t("hero.information")}</span>

                <span className="sparkle">
                  <img src="/images/sparkle.png" alt="" aria-hidden="true" />
                </span>
              </span>

              <br />

              <span className="help">{t("hero.support")}</span>

              <br />

              <span className="title-line">
                <span className="heart">
                  <img src="/images/heart.png" alt="" aria-hidden="true" />
                </span>

                <span className="inclusion">{t("hero.inclusion")}</span>
              </span>
            </h1>

            <p className="hero-text">{t("hero.description")}</p>

            <div className="search-box">
              <div className="search-input-wrapper">
                <i className="bi bi-search search-icon"></i>

                <input
                  type="text"
                  className="form-control search-input"
                  placeholder={t("hero.searchPlaceholder")}
                />
              </div>

              <button type="button" className="btn search-btn">
                {t("hero.searchButton")}
              </button>
            </div>

            <p className="search-example">{t("hero.searchExamples")}</p>
          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/images/zoe.jpg" alt={t("hero.imageAlt")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
