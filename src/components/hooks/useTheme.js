'use client'

import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme } from '@/theme/themeUtils'

export function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const initialTheme = getStoredTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    const resolvedTheme = applyTheme(nextTheme)

    setTheme(resolvedTheme)
    localStorage.setItem('theme', resolvedTheme)
  }

  return { theme, toggleTheme }
}
