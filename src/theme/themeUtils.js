import { defaultTheme, themes } from './themes';

export const isThemeSupported = (themeName) => Object.hasOwn(themes, themeName);

export const getStoredTheme = () => {
  if (typeof window === 'undefined') return defaultTheme;

  const savedTheme = localStorage.getItem('theme');
  return isThemeSupported(savedTheme) ? savedTheme : defaultTheme;
};

export const applyTheme = (themeName) => {
  const resolvedTheme = isThemeSupported(themeName) ? themeName : defaultTheme;
  const palette = themes[resolvedTheme];

  document.documentElement.setAttribute('data-theme', resolvedTheme);

  Object.entries(palette).forEach(([token, value]) => {
    document.documentElement.style.setProperty(`--${token}`, value);
  });

  return resolvedTheme;
};
