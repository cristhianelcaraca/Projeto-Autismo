import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useLocalizedPath from "../hooks/useLocalizedPath";

function SiteSearch() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const localizedPath = useLocalizedPath();

  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const cleanQuery = query.trim();

    if (!cleanQuery) {
      return;
    }

    navigate(
      `${localizedPath("/pesquisa")}?q=${encodeURIComponent(cleanQuery)}`,
    );

    setQuery("");
  }

  return (
    <div className="site-search">
      <form onSubmit={handleSearch}>
        <div className="search-box">
          <div className="search-input-wrapper">
            <i className="bi bi-search search-icon"></i>

            <input
              type="search"
              className="form-control search-input"
              placeholder={t("hero.searchPlaceholder")}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={t("hero.searchPlaceholder")}
            />
          </div>

          <button type="submit" className="btn search-btn">
            {t("hero.searchButton")}
          </button>
        </div>
      </form>

      <p className="search-example">{t("hero.searchExamples")}</p>
    </div>
  );
}

export default SiteSearch;
