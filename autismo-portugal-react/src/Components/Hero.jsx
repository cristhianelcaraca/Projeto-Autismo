import { useTranslation } from "react-i18next";
import SiteSearch from "./SiteSearch";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-title-area">
              <span className="melting">
                <img src="/images/melting.png" alt="" aria-hidden="true" />
              </span>

              <h1 className="hero-title">
                <span className="hero-title-row information-row">
                  <span className="info">{t("hero.information")}</span>

                  <span className="sparkle">
                    <img src="/images/sparkle.png" alt="" aria-hidden="true" />
                  </span>
                </span>

                <span className="hero-title-row support-row">
                  <span className="help">{t("hero.support")}</span>
                </span>

                <span className="hero-title-row inclusion-row">
                  <span className="heart">
                    <img src="/images/heart.png" alt="" aria-hidden="true" />
                  </span>

                  <span className="inclusion">{t("hero.inclusion")}</span>
                </span>
              </h1>
            </div>

            <p className="hero-text">{t("hero.description")}</p>

            <SiteSearch />
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
