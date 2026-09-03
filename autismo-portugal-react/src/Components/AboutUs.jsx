import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="about-us">
      <div className="container about-us-inner">
        <div className="plant">
          <img src="/images/plant.png" alt="" aria-hidden="true" />
        </div>

        <div className="about-text">
          <h3>{t("aboutUs.title")}</h3>

          <p>{t("aboutUs.description")}</p>
        </div>

        <Link to="/sobre-nos" className="btn-white">
          {t("aboutUs.button")}
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
