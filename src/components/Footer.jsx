import React from 'react'
import SocialIcons from './SocialIcons'
import { socials, siteMeta } from '../data'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/50">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: brief intro */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full border brand-badge flex items-center justify-center font-bold brand-mark bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-900">SS</div>
              <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">{siteMeta.author}</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {siteMeta.description}
            </p>
          </div>

          {/* Right: address + contact + socials */}
          <div className="w-full md:w-auto">
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 19.9l-4.95-5.95a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
                <span>Ballia, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href={socials.email} className="hover:text-teal-400 transition-colors">sujeetsharmadc56@gmail.com</a>
              </li>
              <li className="pt-1"><SocialIcons /></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-500 flex items-center justify-between">
          <span>© {currentYear} {siteMeta.author}</span>
          <span>Made with ❤️</span>
        </div>
      </div>

      {/* Bottom accent gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 opacity-20" />
    </footer>
  )
}
