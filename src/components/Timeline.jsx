import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Timeline(){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
        Experience
        <span className="block h-0.5 w-24 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mt-1 rounded"></span>
      </h2>
      <div className="space-y-6">
        {experience.map((e,i)=> (
          <motion.div 
            key={i} 
            whileHover={{x: 4}} 
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="card hero p-5 flex gap-4 items-start"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 mt-2 flex-shrink-0" />
            <div className="flex-1 flex justify-between items-start gap-4">
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">{e.role} — {e.company}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{e.range}</div>
                <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                  {e.points.map((p, idx)=> <li key={idx}>{p}</li>)}
                </ul>
              </div>

              {e.docImage && (
                <div className="w-36 flex-shrink-0">
                  <a href={e.docImage} target="_blank" rel="noreferrer">
                    <div className="w-full h-24 rounded-md overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner">
                      <img
                        src={e.docImage}
                        alt={e.company + ' document'}
                        className="w-full h-full object-cover"
                        onError={(ev)=>{
                          const t = ev.currentTarget
                          t.onerror = null
                          const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'>\n<defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:rgb(34,211,238);stop-opacity:1' /><stop offset='50%' style='stop-color:rgb(93,211,211);stop-opacity:1' /><stop offset='100%' style='stop-color:rgb(16,185,129);stop-opacity:1' /></linearGradient></defs>\n<rect width='100%' height='100%' fill='url(%23grad)'/>\n<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14' font-weight='600' font-family='Poppins, Arial'>${e.company}</text>\n</svg>`
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
