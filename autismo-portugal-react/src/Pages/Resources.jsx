import { useTranslation } from "react-i18next";
import "./Resources.css";

function Resources() {
  const { t } = useTranslation();

  const adultBooks = [
    {
      title: "Unmasking Autism",
      author: "Devon Price",
      image: "/images/resources/unmasking-autism.jpg",
      tag: t("resources.items.tags.autisticAuthor"),
      description: t("resources.items.adultBooks.unmasking"),
      link: "https://www.penguinrandomhouse.com/books/688819/unmasking-autism-by-devon-price-phd/",
    },
    {
      title: "Strong Female Character",
      author: "Fern Brady",
      image: "/images/resources/strong-female-character.jpg",
      tag: t("resources.items.tags.autisticAuthor"),
      description: t("resources.items.adultBooks.strongFemaleCharacter"),
      link: "https://www.penguinrandomhouse.com/books/737422/strong-female-character-by-fern-brady/",
    },
    {
      title: "The Electricity of Every Living Thing",
      author: "Katherine May",
      image: "/images/resources/electricity-every-living-thing.jpg",
      tag: t("resources.items.tags.personalExperience"),
      description: t("resources.items.adultBooks.electricity"),
      link: "https://www.penguinrandomhouse.com/books/703087/the-electricity-of-every-living-thing-by-katherine-may/",
    },
    {
      title: "The Reason I Jump",
      author: "Naoki Higashida",
      image: "/images/resources/reason-i-jump.jpg",
      tag: t("resources.items.tags.autisticAuthor"),
      description: t("resources.items.adultBooks.reasonIJump"),
      link: "https://www.penguinrandomhouse.com/books/227014/the-reason-i-jump-by-naoki-higashida/",
    },
  ];

  const adultSeries = [
    {
      title: "Move to Heaven",
      country: t("resources.items.countries.southKorea"),
      year: "2021",
      image: "/images/resources/move-to-heaven.jpg",
      tag: t("resources.items.tags.series"),
      description: t("resources.items.adultSeries.moveToHeaven"),
      link: "https://www.netflix.com/title/80990381",
    },
    {
      title: t("resources.items.titles.extraordinaryAttorneyWoo"),
      country: t("resources.items.countries.southKorea"),
      year: "2022",
      image: "/images/resources/extraordinary-attorney-woo.jpg",
      tag: t("resources.items.tags.series"),
      description: t("resources.items.adultSeries.extraordinaryAttorneyWoo"),
      link: "https://www.netflix.com/pt-en/title/81518991",
    },
    {
      title: "Light of My Lion",
      country: t("resources.items.countries.japan"),
      year: "2024",
      image: "/images/resources/light-of-my-lion.jpg",
      tag: t("resources.items.tags.series"),
      description: t("resources.items.adultSeries.lightOfMyLion"),
      link: "https://tbscontents.com/en/program/lightofmylion",
    },
    {
      title: "The Good Doctor",
      country: t("resources.items.countries.unitedStates"),
      year: "2017–2024",
      image: "/images/resources/the-good-doctor.jpg",
      tag: t("resources.items.tags.series"),
      description: t("resources.items.adultSeries.goodDoctor"),
      link: "https://abc.com/shows/the-good-doctor/2198201",
    },
  ];

  const adultMovies = [
    {
      title: t("resources.items.titles.different"),
      originalTitle: "Différente",
      country: t("resources.items.countries.france"),
      year: "2025",
      image: "/images/resources/differente.jpg",
      tag: t("resources.items.tags.lateDiagnosis"),
      description: t("resources.items.adultMovies.different"),
      link: "https://www.imdb.com/pt/title/tt34487780/",
    },
    {
      title: "Mozart and the Whale",
      country: t("resources.items.countries.unitedStates"),
      year: "2005",
      image: "/images/resources/mozart-and-the-whale.jpg",
      tag: t("resources.items.tags.romance"),
      description: t("resources.items.adultMovies.mozart"),
      link: "https://www.rottentomatoes.com/m/mozart_and_the_whale",
    },
    {
      title: "Temple Grandin",
      country: t("resources.items.countries.unitedStates"),
      year: "2010",
      image: "/images/resources/temple-grandin.jpg",
      tag: t("resources.items.tags.biographical"),
      description: t("resources.items.adultMovies.templeGrandin"),
      link: "https://www.hbomaxlapress.com/programming/movies/87",
    },
  ];

  const childrenBooks = [
    {
      title: "A Kind of Spark",
      author: "Elle McNicoll",
      image: "/images/resources/a-kind-of-spark-book.jpg",
      tag: t("resources.items.tags.ageEightTwelve"),
      description: t("resources.items.childrenBooks.kindOfSpark"),
      link: "https://www.penguinrandomhouse.com/books/isbn/9780593374276",
    },
    {
      title: "The Awesome Autistic Go-To Guide",
      author: "Yenn Purkis e Tanya Masterman",
      image: "/images/resources/awesome-autistic-guide.jpg",
      tag: t("resources.items.tags.preteensTeens"),
      description: t("resources.items.childrenBooks.awesomeGuide"),
      link: "https://us.jkp.com/products/the-awesome-autistic-goto-guide",
    },
  ];

  const childrenScreen = [
    {
      title: "Loop",
      type: t("resources.items.types.shortFilm"),
      image: "/images/resources/loop.jpg",
      tag: "Pixar",
      description: t("resources.items.childrenScreen.loop"),
      link: "https://www.pixar.com/loop",
    },
    {
      title: "A Kind of Spark",
      type: t("resources.items.types.series"),
      image: "/images/resources/a-kind-of-spark-series.jpg",
      tag: t("resources.items.tags.autisticRepresentation"),
      description: t("resources.items.childrenScreen.kindOfSpark"),
      link: "https://www.bbc.co.uk/iplayer/episodes/p0f7q3rv/a-kind-of-spark",
    },
    {
      title: "Pablo",
      type: t("resources.items.types.animatedSeries"),
      image: "/images/resources/pablo.jpg",
      tag: t("resources.items.tags.children"),
      description: t("resources.items.childrenScreen.pablo"),
      link: "https://www.justwatch.com/uk/tv-series/pablo",
    },
    {
      title: "Thomas & Friends: All Engines Go",
      type: t("resources.items.types.animation"),
      image: "/images/resources/thomas-bruno.jpg",
      tag: t("resources.items.tags.autisticCharacter"),
      description: t("resources.items.childrenScreen.thomas"),
      link: "https://www.thomasandfriends.com/",
    },
  ];

  return (
    <main className="resources-page">
      {/* HERO */}
      <section className="resources-hero">
        <div className="container resources-container">
          <div className="resources-hero-content">
            <div className="resources-hero-text">
              <span className="resources-label">
                {t("resources.hero.label")}
              </span>

              <h1>{t("resources.hero.title")}</h1>

              <p>{t("resources.hero.paragraph1")}</p>

              <p>{t("resources.hero.paragraph2")}</p>
            </div>

            <div className="resources-hero-icon">
              <i className="bi bi-book-half"></i>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO NOTE */}
      <section className="resources-intro">
        <div className="container resources-container">
          <div className="resources-note">
            <i className="bi bi-info-circle"></i>

            <div>
              <h2>{t("resources.intro.title")}</h2>

              <p>{t("resources.intro.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTS */}
      <section className="resources-adults">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              {t("resources.adults.label")}
            </span>

            <h2>{t("resources.common.books")}</h2>

            <p>{t("resources.adults.booksDescription")}</p>
          </div>

          <div className="resources-grid">
            {adultBooks.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                learnMore={t("resources.common.learnMore")}
                coverAlt={t("resources.common.coverAlt", {
                  title: item.title,
                })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADULT SERIES */}
      <section className="resources-series-section">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              {t("resources.adults.label")}
            </span>

            <h2>{t("resources.common.series")}</h2>

            <p>{t("resources.adults.seriesDescription")}</p>
          </div>

          <div className="resources-grid">
            {adultSeries.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                learnMore={t("resources.common.learnMore")}
                coverAlt={t("resources.common.coverAlt", {
                  title: item.title,
                })}
              />
            ))}
          </div>

          <div className="resources-representation-note">
            <i className="bi bi-chat-square-heart"></i>

            <p>{t("resources.adults.representationNote")}</p>
          </div>
        </div>
      </section>

      {/* MOVIES */}
      <section className="resources-movies">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              {t("resources.adults.label")}
            </span>

            <h2>{t("resources.common.movies")}</h2>
          </div>

          <div className="resources-grid resources-grid-three">
            {adultMovies.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                learnMore={t("resources.common.learnMore")}
                coverAlt={t("resources.common.coverAlt", {
                  title: item.title,
                })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AUTISTIC VOICES */}
      <section className="resources-voices">
        <div className="container resources-container">
          <div className="resources-voices-box">
            <div className="resources-voices-icon">
              <i className="bi bi-megaphone"></i>
            </div>

            <div>
              <span className="resources-section-label">
                {t("resources.voices.label")}
              </span>

              <h2>{t("resources.voices.title")}</h2>

              <p>{t("resources.voices.paragraph1")}</p>

              <p>{t("resources.voices.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHILDREN BOOKS */}
      <section className="resources-children">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              {t("resources.children.label")}
            </span>

            <h2>{t("resources.common.books")}</h2>

            <p>{t("resources.children.booksDescription")}</p>
          </div>

          <div className="resources-grid resources-grid-two">
            {childrenBooks.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                learnMore={t("resources.common.learnMore")}
                coverAlt={t("resources.common.coverAlt", {
                  title: item.title,
                })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CHILDREN SCREEN */}
      <section className="resources-children-screen">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              {t("resources.children.label")}
            </span>

            <h2>{t("resources.children.screenTitle")}</h2>
          </div>

          <div className="resources-grid">
            {childrenScreen.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                learnMore={t("resources.common.learnMore")}
                coverAlt={t("resources.common.coverAlt", {
                  title: item.title,
                })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE TOGETHER */}
      <section className="resources-family-note">
        <div className="container resources-container">
          <div className="resources-family-box">
            <i className="bi bi-people"></i>

            <div>
              <h2>{t("resources.family.title")}</h2>

              <p>{t("resources.family.paragraph1")}</p>

              <p>{t("resources.family.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="resources-final">
        <div className="container resources-container">
          <div className="resources-final-box">
            <i className="bi bi-heart"></i>

            <div>
              <h2>{t("resources.final.title")}</h2>

              <p>{t("resources.final.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResourceCard({ item, learnMore, coverAlt }) {
  return (
    <article className="resource-card">
      <div className="resource-card-image">
        <img src={item.image} alt={coverAlt} loading="lazy" />

        {item.tag && <span className="resource-card-tag">{item.tag}</span>}
      </div>

      <div className="resource-card-content">
        <h3>{item.title}</h3>

        {item.originalTitle && (
          <p className="resource-original-title">{item.originalTitle}</p>
        )}

        {item.author && (
          <p className="resource-card-meta">
            <i className="bi bi-person"></i>
            {item.author}
          </p>
        )}

        {(item.country || item.year || item.type) && (
          <p className="resource-card-meta">
            <i className="bi bi-globe2"></i>

            {[item.type, item.country, item.year].filter(Boolean).join(" · ")}
          </p>
        )}

        <p className="resource-card-description">{item.description}</p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="resource-card-link"
          >
            {learnMore}
            <i className="bi bi-arrow-up-right"></i>
          </a>
        )}
      </div>
    </article>
  );
}

export default Resources;
