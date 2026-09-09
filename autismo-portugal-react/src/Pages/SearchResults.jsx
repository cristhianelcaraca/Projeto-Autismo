import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getSearchIndex } from "../searchUtils/searchIndex";
import normalizeText from "../searchUtils/normalizeText";
import useLocalizedPath from "../hooks/useLocalizedPath";

import "./SearchResults.css";

function SearchResults() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const localizedPath = useLocalizedPath();

  const query = searchParams.get("q") || "";

  function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, () =>
      Array(a.length + 1).fill(0),
    );

    for (let i = 0; i <= a.length; i++) {
      matrix[0][i] = i;
    }

    for (let j = 0; j <= b.length; j++) {
      matrix[j][0] = j;
    }

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[j][i] = matrix[j - 1][i - 1];
        } else {
          matrix[j][i] = Math.min(
            matrix[j - 1][i - 1] + 1,
            matrix[j][i - 1] + 1,
            matrix[j - 1][i] + 1,
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  function getSimilarity(word, queryText) {
    const normalizedWord = normalizeText(word);
    const normalizedQuery = normalizeText(queryText);

    if (!normalizedWord || !normalizedQuery) {
      return 0;
    }

    if (normalizedWord === normalizedQuery) {
      return 1;
    }

    const distance = levenshteinDistance(normalizedWord, normalizedQuery);

    const maxLength = Math.max(normalizedWord.length, normalizedQuery.length);

    return 1 - distance / maxLength;
  }

  function cleanWord(word) {
    return word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
  }

  function findClosestWord(text, queryText) {
    const normalizedQuery = normalizeText(queryText);

    if (!normalizedQuery) {
      return null;
    }

    const words = text.split(/\s+/).map(cleanWord).filter(Boolean);

    let bestMatch = null;
    let bestSimilarity = 0;

    words.forEach((word) => {
      const similarity = getSimilarity(word, normalizedQuery);

      if (similarity > bestSimilarity) {
        bestSimilarity = similarity;
        bestMatch = word;
      }
    });

    if (bestSimilarity >= 0.7) {
      return {
        word: bestMatch,
        similarity: bestSimilarity,
      };
    }

    return null;
  }

  function createSnippet(content, queryText) {
    const normalizedContent = normalizeText(content);

    const normalizedQuery = normalizeText(queryText);

    const index = normalizedContent.indexOf(normalizedQuery);

    if (index === -1) {
      const shortText = content.slice(0, 180);

      const lastSpace = shortText.lastIndexOf(" ");

      if (lastSpace === -1) {
        return `${shortText}...`;
      }

      return `${shortText.slice(0, lastSpace).trim()}...`;
    }

    const textBeforeMatch = content.slice(0, index);

    const lastSentenceEnd = Math.max(
      textBeforeMatch.lastIndexOf(". "),
      textBeforeMatch.lastIndexOf("! "),
      textBeforeMatch.lastIndexOf("? "),
    );

    let start;

    if (lastSentenceEnd !== -1 && index - lastSentenceEnd <= 180) {
      start = lastSentenceEnd + 2;
    } else {
      start = Math.max(0, index - 80);

      if (start > 0) {
        const nextSpace = content.indexOf(" ", start);

        if (nextSpace !== -1 && nextSpace < index) {
          start = nextSpace + 1;
        }
      }
    }

    const desiredEnd = Math.min(content.length, index + queryText.length + 140);

    let end = desiredEnd;

    if (desiredEnd < content.length) {
      const nextPeriod = content.indexOf(". ", desiredEnd);

      const nextQuestion = content.indexOf("? ", desiredEnd);

      const nextExclamation = content.indexOf("! ", desiredEnd);

      const sentenceEnds = [nextPeriod, nextQuestion, nextExclamation].filter(
        (position) => position !== -1,
      );

      if (sentenceEnds.length > 0) {
        const nearestSentenceEnd = Math.min(...sentenceEnds);

        if (nearestSentenceEnd - start <= 300) {
          end = nearestSentenceEnd + 1;
        }
      }

      if (end === desiredEnd) {
        const lastSpace = content.lastIndexOf(" ", end);

        if (lastSpace > index) {
          end = lastSpace;
        }
      }
    }

    let snippet = content.slice(start, end).trim();

    if (start > 0 && lastSentenceEnd === -1) {
      snippet = `...${snippet}`;
    }

    if (end < content.length && !/[.!?]$/.test(snippet)) {
      snippet = `${snippet}...`;
    }

    return snippet;
  }

  function calculateScore(page, normalizedQuery, matchedWord = null) {
    const normalizedTitle = normalizeText(page.title);

    const normalizedContent = normalizeText(page.content);

    let score = 0;

    if (normalizedTitle === normalizedQuery) {
      score += 100;
    }

    if (normalizedTitle.includes(normalizedQuery)) {
      score += 50;
    }

    const occurrences = normalizedContent.split(normalizedQuery).length - 1;

    score += occurrences;

    if (matchedWord) {
      score += matchedWord.similarity * 20;
    }

    return score;
  }

  function highlightText(text, queryText) {
    if (!queryText) {
      return text;
    }

    const escapedQuery = queryText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`(${escapedQuery})`, "gi");

    return text.split(regex).map((part, index) => {
      const isMatch = normalizeText(part) === normalizeText(queryText);

      if (isMatch) {
        return <mark key={`${part}-${index}`}>{part}</mark>;
      }

      return part;
    });
  }

  const normalizedQuery = normalizeText(query);

  const currentLanguage = i18n.resolvedLanguage || i18n.language || "pt";

  const searchIndex = getSearchIndex(currentLanguage);

  const results = normalizedQuery
    ? searchIndex
        .map((page) => {
          const searchableText = `${page.title} ${page.content}`;

          const normalizedSearchableText = normalizeText(searchableText);

          const hasExactMatch =
            normalizedSearchableText.includes(normalizedQuery);

          if (hasExactMatch) {
            return {
              ...page,

              matchedTerm: query,

              score: calculateScore(page, normalizedQuery),

              snippet: createSnippet(
                page.snippetContent || page.content,
                query,
              ),
            };
          }

          const closestMatch = findClosestWord(searchableText, query);

          if (!closestMatch) {
            return null;
          }

          return {
            ...page,

            matchedTerm: closestMatch.word,

            score: calculateScore(page, normalizedQuery, closestMatch),

            snippet: createSnippet(
              page.snippetContent || page.content,
              closestMatch.word,
            ),
          };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
    : [];

  return (
    <main className="search-results-page">
      <section className="search-results-hero">
        <div className="container search-results-container">
          <span className="search-results-label">{t("searchPage.label")}</span>

          <h1>{t("searchPage.title")}</h1>

          {query && (
            <p className="search-results-query">
              {t("searchPage.searchFor")} <strong>“{query}”</strong>
            </p>
          )}
        </div>
      </section>

      <section className="search-results-content">
        <div className="container search-results-container">
          {!query && (
            <div className="search-empty-box">
              <i className="bi bi-search"></i>

              <p>{t("searchPage.emptySearch")}</p>

              <Link to={localizedPath("/")}>{t("searchPage.backHome")}</Link>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="search-empty-box">
              <i className="bi bi-search-heart"></i>

              <h2>{t("searchPage.noResultsTitle")}</h2>

              <p>{t("searchPage.noResults", { query })}</p>

              <Link to={localizedPath("/")}>{t("searchPage.tryAgain")}</Link>
            </div>
          )}

          {results.length > 0 && (
            <>
              <div className="search-results-summary">
                <strong>
                  {t("searchPage.resultsCount", {
                    count: results.length,
                  })}
                </strong>
              </div>

              <div className="search-page-list">
                {results.map((result) => (
                  <article key={result.route} className="search-page-card">
                    <div className="search-page-card-content">
                      <h2>
                        <Link to={localizedPath(result.route)}>
                          {highlightText(result.title, result.matchedTerm)}
                        </Link>
                      </h2>

                      <p>{highlightText(result.snippet, result.matchedTerm)}</p>

                      <Link
                        to={localizedPath(result.route)}
                        className="search-page-link"
                      >
                        {t("searchPage.openPage")}

                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default SearchResults;
