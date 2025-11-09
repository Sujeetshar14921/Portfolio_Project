import React, { useEffect, useState } from 'react'

const THEMES = ['modern','minimal','neo']

export default function ThemeSelector(){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('site-theme') || 'modern' } catch { return 'modern' }
  })

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    // toggle tailwind dark class for neo theme for any tailwind dark utilities
    if(theme === 'neo') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    try {
      localStorage.setItem('site-theme', theme)
      // keep the simple 'theme' key in sync for dark/light toggles
      localStorage.setItem('theme', theme === 'neo' ? 'dark' : 'light')
    } catch {}
  }, [theme])

  return (
    <div className="flex items-center gap-2">
      {THEMES.map(t => (
        <button
          key={t}
          onClick={()=>setTheme(t)}
          className={`px-2 py-1 rounded-md text-sm ${theme===t? 'bg-white/10 dark:bg-white/10 ring-1 ring-white/10' : 'bg-transparent'}`}
          aria-pressed={theme===t}
          title={`Switch to ${t} theme`}
        >
          {t.charAt(0).toUpperCase()+t.slice(1)}
        </button>
      ))}
    </div>
  )
}
