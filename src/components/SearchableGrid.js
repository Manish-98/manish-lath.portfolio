'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

// Generic fuzzy search function
const fuzzySearch = (query, text) => {
  if (!query || !text) return !query;
  
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Direct substring match gets highest priority
  if (textLower.includes(queryLower)) return true;
  
  // Fuzzy matching - check if all characters in query appear in order
  let queryIndex = 0;
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++;
    }
  }
  
  return queryIndex === queryLower.length;
};

// Generic search configuration
const defaultSearchConfig = {
  fields: ['title', 'description'],
  weights: { title: 100, description: 25 },
  placeholder: 'Search...',
  noResultsTitle: 'No results found',
  noResultsSubtitle: 'Try adjusting your search terms',
  enableFuzzy: true,
  caseSensitive: false
};

const SearchableGrid = ({
  data = [],
  renderItem,
  searchConfig = {},
  gridClassName = "grid grid-cols-1 lg:grid-cols-2 gap-8",
  searchClassName = "relative w-full sm:w-80",
  title,
  titleClassName = "text-3xl font-bold text-primary",
  containerClassName = "max-w-7xl mx-auto",
  headerClassName = "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8",
  showResultsCount = true,
  customEmptyState,
  onSearchChange,
  initialSearch = ""
}) => {
  const config = { ...defaultSearchConfig, ...searchConfig };
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Generic search function that works with any data structure
  const searchInItem = (query, item) => {
    if (!query.trim()) return true;

    const queryLower = config.caseSensitive ? query : query.toLowerCase();
    
    return config.fields.some(field => {
      const value = getNestedValue(item, field);
      if (!value) return false;

      // Handle arrays (like technologies)
      if (Array.isArray(value)) {
        return value.some(val => 
          config.enableFuzzy 
            ? fuzzySearch(queryLower, val)
            : (config.caseSensitive ? val : val.toLowerCase()).includes(queryLower)
        );
      }

      // Handle strings
      const textValue = config.caseSensitive ? value : value.toLowerCase();
      return config.enableFuzzy 
        ? fuzzySearch(queryLower, textValue)
        : textValue.includes(queryLower);
    });
  };

  // Get nested object values (e.g., "user.profile.name")
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  // Calculate match score for sorting
  const getMatchScore = (query, item) => {
    if (!query.trim()) return 0;
    
    const queryLower = config.caseSensitive ? query : query.toLowerCase();
    let score = 0;

    config.fields.forEach(field => {
      const value = getNestedValue(item, field);
      const weight = config.weights[field] || 1;

      if (!value) return;

      if (Array.isArray(value)) {
        const hasMatch = value.some(val => {
          const textValue = config.caseSensitive ? val : val.toLowerCase();
          return textValue.includes(queryLower);
        });
        if (hasMatch) score += weight;
      } else {
        const textValue = config.caseSensitive ? value : value.toLowerCase();
        if (textValue.includes(queryLower)) score += weight;
      }
    });

    return score;
  };

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    const results = data
      .filter(item => searchInItem(searchQuery, item))
      .map(item => ({
        ...item,
        _searchScore: getMatchScore(searchQuery, item)
      }))
      .filter(item => item._searchScore > 0)
      .sort((a, b) => b._searchScore - a._searchScore);

    return results;
  }, [searchQuery, data, config]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    onSearchChange?.(value, filteredData);
  };

  const clearSearch = () => {
    handleSearchChange('');
  };

  return (
    <div className={containerClassName}>
      <div className={headerClassName}>
        {title && <h2 className={titleClassName}>{title}</h2>}
        
        {/* Search Input */}
        <div className={searchClassName}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-secondary" />
          </div>
          <input
            type="text"
            placeholder={config.placeholder}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-section text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && showResultsCount && (
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {filteredData.length === 0 
              ? `No results found for "${searchQuery}"`
              : `Found ${filteredData.length} result${filteredData.length !== 1 ? 's' : ''} matching "${searchQuery}"`
            }
          </p>
        </div>
      )}

      {/* Results Grid */}
      <div className={gridClassName}>
        {filteredData.length === 0 && searchQuery ? (
          customEmptyState || (
            <div className="col-span-full text-center py-12">
              <p className="text-secondary text-lg mb-4">{config.noResultsTitle}</p>
              <p className="text-secondary text-sm">{config.noResultsSubtitle}</p>
            </div>
          )
        ) : (
          filteredData.map((item, idx) => renderItem(item, idx))
        )}
      </div>
    </div>
  );
};

export default SearchableGrid;