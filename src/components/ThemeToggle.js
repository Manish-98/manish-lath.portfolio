'use client';

import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // TODO: Implement theme toggle
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:opacity-80 bg-section text-text-primary"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon size={18} />
        ) : (
          <Sun size={18} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle; 