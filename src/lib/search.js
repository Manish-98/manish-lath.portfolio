export const defaultSearchConfig = {
  fields: ["title", "description"],
  weights: { title: 100, description: 25 },
  placeholder: "Search...",
  noResultsTitle: "No results found",
  noResultsSubtitle: "Try adjusting your search terms",
  enableFuzzy: true,
  caseSensitive: false,
};

export const getNestedValue = (obj, path) =>
  path.split(".").reduce((current, key) => current?.[key], obj);

const normalizeText = (value, caseSensitive) =>
  caseSensitive ? String(value) : String(value).toLowerCase();

export const fuzzySearch = (query, text) => {
  if (!query || !text) return !query;

  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  if (textLower.includes(queryLower)) return true;

  let queryIndex = 0;
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i += 1) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex += 1;
    }
  }

  return queryIndex === queryLower.length;
};

export const searchInItem = (query, item, config) => {
  if (!query.trim()) return true;

  const normalizedQuery = normalizeText(query, config.caseSensitive);

  return config.fields.some((field) => {
    const value = getNestedValue(item, field);
    if (!value) return false;

    const values = Array.isArray(value) ? value : [value];
    return values.some((entry) => {
      const normalizedEntry = normalizeText(entry, config.caseSensitive);
      return config.enableFuzzy
        ? fuzzySearch(normalizedQuery, normalizedEntry)
        : normalizedEntry.includes(normalizedQuery);
    });
  });
};

export const getMatchScore = (query, item, config) => {
  if (!query.trim()) return 0;

  const normalizedQuery = normalizeText(query, config.caseSensitive);
  let score = 0;

  config.fields.forEach((field) => {
    const value = getNestedValue(item, field);
    if (!value) return;

    const weight = config.weights[field] || 1;
    const values = Array.isArray(value) ? value : [value];

    const matchTypeScore = values.reduce((best, entry) => {
      const normalizedEntry = normalizeText(entry, config.caseSensitive);
      if (normalizedEntry.includes(normalizedQuery)) return Math.max(best, 2);
      if (config.enableFuzzy && fuzzySearch(normalizedQuery, normalizedEntry)) {
        return Math.max(best, 1);
      }
      return best;
    }, 0);

    if (matchTypeScore > 0) {
      score += weight * matchTypeScore;
    }
  });

  return score;
};

export const getFilteredData = (data, query, config) => {
  if (!query.trim()) return data;

  return data
    .filter((item) => searchInItem(query, item, config))
    .map((item) => ({ ...item, _searchScore: getMatchScore(query, item, config) }))
    .filter((item) => item._searchScore > 0)
    .sort((a, b) => b._searchScore - a._searchScore);
};
