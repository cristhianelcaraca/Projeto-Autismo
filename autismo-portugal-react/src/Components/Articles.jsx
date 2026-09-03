import { useTranslation } from "react-i18next";

function Articles() {
  const { t } = useTranslation();

  return (
    <section className="articles">
      <div className="container-2">
        <h2 className="articles-title">{t("articles.title")}</h2>

        <span className="star">
          <img src="/images/star.png" alt="" aria-hidden="true" />
        </span>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Artigo 1 */}
          <div className="col">
            <div className="article-card">
              <h3>{t("articles.article1.title")}</h3>

              <p>{t("articles.article1.description")}</p>

              <a
                href="https://observador.pt/2025/01/14/projeto-europeu-auxilia-criacao-de-terapias-personalizadas-para-o-autismo-com-investigadores-da-universidade-de-coimbra-envolvidos/"
                className="article-link btn-yellow"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("articles.learnMore")} →
              </a>
            </div>
          </div>

          {/* Artigo 2 */}
          <div className="col">
            <div className="article-card">
              <h3>{t("articles.article2.title")}</h3>

              <p>{t("articles.article2.description")}</p>

              <a
                href="https://observador.pt/2025/01/14/projeto-europeu-auxilia-criacao-de-terapias-personalizadas-para-o-autismo-com-investigadores-da-universidade-de-coimbra-envolvidos/"
                className="article-link btn-purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("articles.learnMore")} →
              </a>
            </div>
          </div>

          {/* Artigo 3 */}
          <div className="col">
            <div className="article-card">
              <h3>{t("articles.article3.title")}</h3>

              <p>{t("articles.article3.description")}</p>

              <a
                href="https://estudogeral.uc.pt/handle/10316/114182"
                className="article-link btn-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("articles.learnMore")} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
