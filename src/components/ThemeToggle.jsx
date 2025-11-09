import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle(){
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' } catch { return false }
  })

  useEffect(() => {
    // ensure DOM matches stored state
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDark])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 card transparent border-0"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 flex items-center justify-center ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg
          className="w-5 h-5 text-slate-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -180 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-center ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </motion.div>
    </button>
  )
}
