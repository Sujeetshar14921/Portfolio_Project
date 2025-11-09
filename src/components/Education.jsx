import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../data'

export default function Education(){
  return (
    <section id="education" className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {education.map(e => (
          <motion.div 
            key={e.id} 
            whileHover={{scale:1.02, y: -6}} 
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="card hero p-4"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{e.degree}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{e.school} · <span className="font-medium">{e.range}</span></div>
                <ul className="mt-2 text-sm list-disc list-inside text-slate-600 dark:text-slate-300">
                  {e.details?.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

              {e.image && (
                <div className="w-40 flex-shrink-0">
                  <a href={e.image} target="_blank" rel="noreferrer">
                    <div className="w-full h-24 rounded-md overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner">
                      <img
                        src={e.image}
                        alt={e.degree}
                        className="w-full h-full object-cover"
                        onError={(e)=>{
                          const t = e.currentTarget
                          t.onerror = null
                          const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='160'>\n<defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:rgb(34,211,238);stop-opacity:1' /><stop offset='50%' style='stop-color:rgb(93,211,211);stop-opacity:1' /><stop offset='100%' style='stop-color:rgb(16,185,129);stop-opacity:1' /></linearGradient></defs>\n<rect width='100%' height='100%' fill='url(%23grad)'/>\n<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14' font-weight='600' font-family='Poppins, Arial'>${e.degree}</text>\n</svg>`
                          t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
                        }}
                      />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
