import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useLocalizedPath from "../hooks/useLocalizedPath";

function AboutUs() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <section className="about-us">
      <div className="container about-us-inner">
        <div className="plant">
          <img src="/images/plant.png" alt="" aria-hidden="true" />
        </div>

        <div className="about-text">
          <h2>{t("aboutUs.title")}</h2>

          <p>{t("aboutUs.description")}</p>
        </div>

        <Link to={localizedPath("/sobre-nos")} className="btn-white">
          {t("aboutUs.button")}
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
