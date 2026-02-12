'use client';

import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { defaultSearchConfig, getFilteredData } from '@/lib/search';

const SearchableGrid = ({
  data = [],
  renderItem,
  searchConfig = {},
  gridClassName = 'grid grid-cols-1 lg:grid-cols-2 gap-8',
  searchClassName = 'relative w-full sm:w-80',
  title,
  titleClassName = 'text-3xl font-bold text-primary',
  containerClassName = 'max-w-7xl mx-auto',
  headerClassName =
    'flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8',
  showResultsCount = true,
  customEmptyState,
  onSearchChange,
  initialSearch = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const config = useMemo(
    () => ({ ...defaultSearchConfig, ...searchConfig }),
    [searchConfig]
  );

  const filteredData = useMemo(
    () => getFilteredData(data, searchQuery, config),
    [searchQuery, data, config]
  );

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    onSearchChange?.(value, getFilteredData(data, value, config));
  };

  return (
    <div className={containerClassName}>
      <div className={headerClassName}>
        {title && <h2 className={titleClassName}>{title}</h2>}

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
              onClick={() => handleSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {searchQuery && showResultsCount && (
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {filteredData.length === 0
              ? `No results found for "${searchQuery}"`
              : `Found ${filteredData.length} result${filteredData.length !== 1 ? 's' : ''} matching "${searchQuery}"`}
          </p>
        </div>
      )}

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
