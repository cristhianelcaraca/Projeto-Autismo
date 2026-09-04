const ignoredKeys = new Set(["imageAlt", "coverAlt", "alt"]);

const snippetIgnoredKeys = new Set([
  "imageAlt",
  "coverAlt",
  "alt",
  "label",
  "title",
  "button",
  "buttonText",
  "linkText",
]);

export default function flattenText(object, options = {}) {
  const { forSnippet = false } = options;

  if (object === null || object === undefined) {
    return "";
  }

  if (typeof object === "string" || typeof object === "number") {
    return String(object);
  }

  if (Array.isArray(object)) {
    return object
      .map((item) => flattenText(item, { forSnippet }))
      .filter(Boolean)
      .join(" ");
  }

  if (typeof object === "object") {
    const keysToIgnore = forSnippet ? snippetIgnoredKeys : ignoredKeys;

    return Object.entries(object)
      .filter(([key]) => !keysToIgnore.has(key))
      .map(([, value]) => flattenText(value, { forSnippet }))
      .filter(Boolean)
      .join(" ");
  }

  return "";
}
