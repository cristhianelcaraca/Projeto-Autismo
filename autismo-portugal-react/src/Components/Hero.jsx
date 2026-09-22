import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import SiteSearch from "./SiteSearch";

const instagramPosts = [
  {
    id: "DdkKeS3Bi4Q",
    url: "https://www.instagram.com/reel/DdkKeS3Bi4Q/",
    title: "Os desafios do autismo na adolescência",
  },
  {
    id: "DdkKeS3Bi4Q",
    url: "https://www.instagram.com/reel/DdkKeS3Bi4Q/",
    title: "Os desafios do autismo na adolescência",
  },
  {
    id: "DdkKeS3Bi4Q",
    url: "https://www.instagram.com/reel/DdkKeS3Bi4Q/",
    title: "Os desafios do autismo na adolescência",
  },
];

function Hero() {
  const { t } = useTranslation();

  // Começa pelo vídeo central.
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPosts = instagramPosts.length;

  const goToSlide = (index) => {
    const nextIndex = (index + totalPosts) % totalPosts;
    setActiveIndex(nextIndex);
  };

  const goToPrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const goToNext = () => {
    goToSlide(activeIndex + 1);
  };

  // Navegação pelas setas do teclado.
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Não interfere enquanto o utilizador está a escrever num campo.
      const tagName = event.target?.tagName?.toLowerCase();

      if (tagName === "input" || tagName === "textarea") {
        return;
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      {/* =========================
          HERO PRINCIPAL
      ========================= */}
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
                      <img
                        src="/images/sparkle.png"
                        alt=""
                        aria-hidden="true"
                      />
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
                <img
                  src="/images/zoe.webp"
                  alt={t("hero.imageAlt")}
                  width="750"
                  height="938"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECÇÃO EM DESTAQUE
      ========================= */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-header">
            {/* Título + imagem na mesma linha */}
            <div className="featured-title-row">
              <h2 className="featured-title">{t("hero.featured")}</h2>

              <span className="featured-sparkle">
                <img src="/images/sparkle.png" alt="" aria-hidden="true" />
              </span>
            </div>

            <h3 className="featured-subtitle">{t("hero.featuredTitle")}</h3>
          </div>

          {/* =========================
              CARROSSEL DE INSTAGRAM
          ========================= */}
          <div
            className="instagram-carousel"
            aria-label="Carrossel de vídeos em destaque"
          >
            <button
              type="button"
              className="instagram-carousel-btn prev"
              onClick={goToPrevious}
              aria-label="Vídeo anterior"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div className="instagram-carousel-stage">
              {instagramPosts.map((post, index) => {
                /*
                 * position:
                 * 0 = centro
                 * 1 = direita
                 * 2 = esquerda
                 *
                 * Como temos 3 vídeos, o cálculo circular
                 * mantém sempre um vídeo em cada posição.
                 */
                const position =
                  (index - activeIndex + totalPosts) % totalPosts;

                let positionClass = "is-prev";

                if (position === 0) {
                  positionClass = "is-active";
                } else if (position === 1) {
                  positionClass = "is-next";
                }

                return (
                  <article
                    className={`instagram-carousel-slide ${positionClass}`}
                    key={`${post.id}-${index}`}
                    aria-hidden={position !== 0}
                  >
                    <div className="instagram-card">
                      <iframe
                        src={`https://www.instagram.com/reel/${post.id}/embed`}
                        title={`${post.title} - vídeo ${index + 1}`}
                        loading={position === 0 ? "eager" : "lazy"}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="instagram-carousel-btn next"
              onClick={goToNext}
              aria-label="Próximo vídeo"
            >
              <span aria-hidden="true">›</span>
            </button>

            {/* Indicadores */}
            <div className="instagram-carousel-dots">
              {instagramPosts.map((post, index) => (
                <button
                  type="button"
                  key={`dot-${post.id}-${index}`}
                  className={`instagram-carousel-dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para o vídeo ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>

            {/* Link para o Reel */}
            <a
              className="instagram-carousel-link"
              href={instagramPosts[activeIndex].url}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
