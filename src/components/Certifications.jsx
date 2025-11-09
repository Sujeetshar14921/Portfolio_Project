import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data'

export default function Certifications(){
  return (
    <section id="certifications" className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map(c => (
          <motion.article 
            key={c.id} 
            whileHover={{scale:1.02, y: -6}} 
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="card hero p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{c.title}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.issuer} · <span className="font-medium">{c.year}</span></div>
                {c.link && (
                  <div className="mt-3">
                    <a href={c.link} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20 text-sm hover:shadow-xl transition-shadow">View credential</a>
                  </div>
                )}
              </div>

              {c.image && (
                <div className="w-32 flex-shrink-0">
                  <a href={c.image} target="_blank" rel="noreferrer">
                    <div className="w-full h-20 rounded-md overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover"
                        onError={(e)=>{
                          const t = e.currentTarget
                          t.onerror = null
                          const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'>\n<defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:rgb(34,211,238);stop-opacity:1' /><stop offset='50%' style='stop-color:rgb(93,211,211);stop-opacity:1' /><stop offset='100%' style='stop-color:rgb(16,185,129);stop-opacity:1' /></linearGradient></defs>\n<rect width='100%' height='100%' fill='url(%23grad)'/>\n<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14' font-weight='600' font-family='Poppins, Arial'>${c.title}</text>\n</svg>`
                          t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
                        }}
                      />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
