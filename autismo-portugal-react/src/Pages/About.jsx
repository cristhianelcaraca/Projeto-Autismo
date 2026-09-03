import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  const technologies = [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "Bootstrap",
    "React Router",
  ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container about-container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <span className="about-label">{t("about.hero.label")}</span>

              <h1>{t("about.hero.title")}</h1>

              <p className="about-hero-highlight">
                {t("about.hero.highlight")}
              </p>

              <p>{t("about.hero.description")}</p>
            </div>

            <div className="about-hero-icon">
              <i className="bi bi-heart"></i>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-why">
        <div className="container about-container">
          <div className="about-why-box">
            <div className="about-why-icon">
              <i className="bi bi-compass"></i>
            </div>

            <div className="about-why-content">
              <span className="about-section-label">
                {t("about.why.label")}
              </span>

              <h2>{t("about.why.title")}</h2>

              <p>{t("about.why.paragraph1")}</p>
              <p>{t("about.why.paragraph2")}</p>
              <p>{t("about.why.paragraph3")}</p>

              <div className="about-why-highlight">
                <i className="bi bi-lightbulb"></i>
                <p>{t("about.why.highlight")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS BEHIND THE PROJECT */}
      <section className="about-me">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">{t("about.me.label")}</span>

            <h2>{t("about.me.title")}</h2>
          </div>

          <div className="about-me-box">
            <div className="after-wrap-image me-image">
              <img src="/images/Cris.png" alt={t("about.me.imageAlt")} />
            </div>

            <div className="about-me-content">
              <h3>{t("about.me.greeting")}</h3>

              <p>{t("about.me.paragraph1")}</p>
              <p>{t("about.me.paragraph2")}</p>
              <p>{t("about.me.paragraph3")}</p>
              <p>{t("about.me.paragraph4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TO CODE */}
      <section className="about-project">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              {t("about.project.label")}
            </span>

            <h2>{t("about.project.title")}</h2>
            <p>{t("about.project.description")}</p>
          </div>

          <div className="about-project-grid">
            <article className="about-project-card experience">
              <div className="about-project-icon">
                <i className="bi bi-heart"></i>
              </div>

              <h3>{t("about.project.experience.title")}</h3>
              <p>{t("about.project.experience.description")}</p>
            </article>

            <article className="about-project-card research">
              <div className="about-project-icon">
                <i className="bi bi-search"></i>
              </div>

              <h3>{t("about.project.research.title")}</h3>
              <p>{t("about.project.research.description")}</p>
            </article>

            <article className="about-project-card technology">
              <div className="about-project-icon">
                <i className="bi bi-code-slash"></i>
              </div>

              <h3>{t("about.project.technology.title")}</h3>
              <p>{t("about.project.technology.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="about-purpose">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              {t("about.purpose.label")}
            </span>

            <h2>{t("about.purpose.title")}</h2>
            <p>{t("about.purpose.description")}</p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card green">
              <i className="bi bi-chat-left-text"></i>

              <h3>{t("about.purpose.clear.title")}</h3>
              <p>{t("about.purpose.clear.description")}</p>
            </article>

            <article className="about-purpose-card blue">
              <i className="bi bi-journal-check"></i>

              <h3>{t("about.purpose.sources.title")}</h3>
              <p>{t("about.purpose.sources.description")}</p>
            </article>

            <article className="about-purpose-card purple">
              <i className="bi bi-people"></i>

              <h3>{t("about.purpose.diversity.title")}</h3>
              <p>{t("about.purpose.diversity.description")}</p>
            </article>

            <article className="about-purpose-card yellow">
              <i className="bi bi-signpost-split"></i>

              <h3>{t("about.purpose.practical.title")}</h3>
              <p>{t("about.purpose.practical.description")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* PERSONAL EXPERIENCE */}
      <section className="about-experience">
        <div className="container about-container">
          <div className="about-experience-box">
            <div className="about-experience-icon">
              <i className="bi bi-quote"></i>
            </div>

            <div className="about-experience-content">
              <span className="about-section-label">
                {t("about.experience.label")}
              </span>

              <h2>{t("about.experience.title")}</h2>

              <p>{t("about.experience.paragraph1")}</p>
              <p>{t("about.experience.paragraph2")}</p>
              <p>{t("about.experience.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="about-disclaimer">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              {t("about.disclaimer.label")}
            </span>

            <h2>{t("about.disclaimer.title")}</h2>
          </div>

          <div className="about-disclaimer-box">
            <div className="about-disclaimer-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div className="about-disclaimer-content">
              <h3>{t("about.disclaimer.subtitle")}</h3>

              <p>{t("about.disclaimer.paragraph1")}</p>
              <p>{t("about.disclaimer.paragraph2")}</p>
              <p>{t("about.disclaimer.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GROWING PROJECT */}
      <section className="about-growing">
        <div className="container about-container">
          <div className="about-growing-content">
            <div className="about-growing-text">
              <span className="about-section-label">
                {t("about.growing.label")}
              </span>

              <h2>{t("about.growing.title")}</h2>

              <p>{t("about.growing.paragraph1")}</p>
              <p>{t("about.growing.paragraph2")}</p>

              <div className="about-topics">
                <span>{t("about.growing.topics.diagnosis")}</span>
                <span>{t("about.growing.topics.school")}</span>
                <span>{t("about.growing.topics.rights")}</span>
                <span>{t("about.growing.topics.dailyLife")}</span>
                <span>{t("about.growing.topics.resources")}</span>
              </div>
            </div>

            <div className="about-growing-icon">
              <i className="bi bi-stars"></i>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="about-technology">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              {t("about.technology.label")}
            </span>

            <h2>{t("about.technology.title")}</h2>
            <p>{t("about.technology.description")}</p>
          </div>

          <div className="about-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <p className="about-development-credit">
            {t("about.technology.credit")} <strong>Cris Caraça</strong>.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="about-contact">
        <div className="container about-container">
          <div className="about-contact-box">
            <div className="about-contact-icon">
              <i className="bi bi-envelope-heart"></i>
            </div>

            <div className="about-contact-content">
              <span className="about-section-label">
                {t("about.contact.label")}
              </span>

              <h2>{t("about.contact.title")}</h2>

              <p>{t("about.contact.description")}</p>

              <a
                href="mailto:cristhianelcaraca@gmail.com"
                className="about-contact-button"
              >
                <i className="bi bi-envelope"></i>
                {t("about.contact.button")}
              </a>

              <p className="about-contact-email">cristhianelcaraca@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="about-final">
        <div className="container about-container">
          <div className="about-final-box">
            <i className="bi bi-heart-fill"></i>
            <p>{t("about.final")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
