import { useParams } from "react-router-dom";

function useLocalizedPath() {
  const { lang } = useParams();

  const currentLanguage = lang === "en" ? "en" : "pt";

  function localizedPath(path = "") {
    // Página inicial
    if (!path || path === "/") {
      return `/${currentLanguage}`;
    }

    // Garante que a rota começa com /
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return `/${currentLanguage}${cleanPath}`;
  }

  return localizedPath;
}

export default useLocalizedPath;
