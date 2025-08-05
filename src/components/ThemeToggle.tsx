'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggle = () => {
    const isDark = document.documentElement.classList.contains('dark')

    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={toggle}
      className="rounded-full px-3 py-1"
    >
      {darkMode ? '🌙' : '☀️'}
    </Button>
  )
}