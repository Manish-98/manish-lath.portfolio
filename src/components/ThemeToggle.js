'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:opacity-80 bg-section text-primary"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Moon size={18} color='var(--color-brand)' />
        ) : (
          <Sun size={18} color='var(--color-brand)' />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle; 