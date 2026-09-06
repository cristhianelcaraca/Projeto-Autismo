import { useEffect } from "react";

function SEO({
  title,
  description,
  language,
  pagePath,
  image = "/images/autism.png",
  noIndex = false,
}) {
  useEffect(() => {
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/$/, "");

    const cleanPath =
      !pagePath || pagePath === "/"
        ? ""
        : pagePath.startsWith("/")
          ? pagePath
          : `/${pagePath}`;

    const portugueseUrl = `${siteUrl}/pt${cleanPath}`;

    const englishUrl = `${siteUrl}/en${cleanPath}`;

    const canonicalUrl = language === "en" ? englishUrl : portugueseUrl;

    const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

    /*
      TITLE
    */
    if (title) {
      document.title = title;
    }

    /*
      META TAG HELPER
    */
    function setMeta(name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    }

    /*
      OPEN GRAPH HELPER
    */
    function setProperty(property, content) {
      let meta = document.querySelector(`meta[property="${property}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    }

    /*
      META DESCRIPTION
    */
    if (description) {
      setMeta("description", description);
    }

    /*
      ROBOTS
    */
    setMeta("robots", noIndex ? "noindex, follow" : "index, follow");

    /*
      CANONICAL + HREFLANG

      Só são adicionados às páginas
      que podem ser indexadas.
    */
    if (!noIndex) {
      /*
        CANONICAL
      */
      let canonical = document.querySelector('link[rel="canonical"]');

      if (!canonical) {
        canonical = document.createElement("link");

        canonical.setAttribute("rel", "canonical");

        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", canonicalUrl);

      /*
        HREFLANG HELPER
      */
      function setAlternateLanguage(hreflang, href) {
        let alternate = document.querySelector(
          `link[rel="alternate"][hreflang="${hreflang}"]`,
        );

        if (!alternate) {
          alternate = document.createElement("link");

          alternate.setAttribute("rel", "alternate");

          alternate.setAttribute("hreflang", hreflang);

          document.head.appendChild(alternate);
        }

        alternate.setAttribute("href", href);
      }

      /*
        HREFLANG
      */
      setAlternateLanguage("pt-PT", portugueseUrl);

      setAlternateLanguage("en", englishUrl);

      setAlternateLanguage("x-default", portugueseUrl);
    } else {
      /*
        PÁGINAS NOINDEX

        Remove canonical e hreflang
        que possam ter ficado da
        página anterior.
      */
      document.querySelector('link[rel="canonical"]')?.remove();

      document
        .querySelectorAll('link[rel="alternate"][hreflang]')
        .forEach((link) => {
          link.remove();
        });
    }

    /*
      OPEN GRAPH
    */
    if (title) {
      setProperty("og:title", title);
    }

    if (description) {
      setProperty("og:description", description);
    }

    setProperty("og:type", "website");

    setProperty("og:url", canonicalUrl);

    setProperty("og:site_name", "Autismo Portugal");

    setProperty("og:image", imageUrl);

    if (language === "en") {
      setProperty("og:locale", "en_GB");

      setProperty("og:locale:alternate", "pt_PT");
    } else {
      setProperty("og:locale", "pt_PT");

      setProperty("og:locale:alternate", "en_GB");
    }

    /*
      TWITTER / X
    */
    setMeta("twitter:card", "summary_large_image");

    if (title) {
      setMeta("twitter:title", title);
    }

    if (description) {
      setMeta("twitter:description", description);
    }

    setMeta("twitter:image", imageUrl);
  }, [title, description, language, pagePath, image, noIndex]);

  return null;
}

export default SEO;
